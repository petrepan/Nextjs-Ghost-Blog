import Head from "next/head";
import { useRouter } from "next/router";
import style from "../../styles/Style.module.css";
import articlestyle from "../../styles/Article.module.css";
import Layout from "../../component/layout";

async function getPosts(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.NEXT_PUBLIC_CONTENT_API_KEY}`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

export const getStaticProps = async ({ params }) => {
  const post = await getPosts(params.slug);
  return {
    revalidate: 10,
    props: { post },
  };
};

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

export default function Articles({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1 style={{color: 'black'}}>Loading...</h1>;
  }
  console.log(post);
  return (
    <Layout article post={post}>
      <Head>
        <title>The Wizkid Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${style.container} ${articlestyle.article}`}>
        <div className="main-wrapper">
          <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
          <div className="social-links">
            <h6>Share on:</h6>
            <p>
              <a
                href={`http://twitter.com/intent/tweet?text=`}>
                <i className="fab fa-facebook-f"></i>
              </a>
            </p>
            <p>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </p>
            <p>
              <a href="">
                <i className="fab fa-whatsapp"></i>
              </a>
            </p>
            <p>
              <a href="">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </p>
          </div>
          <div className={style.prevnext}>
            <div>
              <span>
                <i className="fas fa-long-arrow-alt-left"></i> PREV
              </span>
              <a href="">How i became the baddest in Africa</a>
            </div>
            <div>
              <span>
                NEXT <i className="fas fa-long-arrow-alt-right"></i>
              </span>
              <a href="">How i became the baddest in Africa</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
