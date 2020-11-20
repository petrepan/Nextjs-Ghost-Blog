import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import style from "../../styles/Style.module.css";
import articlestyle from "../../styles/Article.module.css";
import Layout from "../../component/layout";

async function getAllPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_CONTENT_API_KEY}&limit=all`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

async function getPosts(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.NEXT_PUBLIC_CONTENT_API_KEY}`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

export const getStaticProps = async ({ params }) => {
  const post = await getPosts(params.slug);
  const allPost = await getAllPosts();
  return {
    revalidate: 10,
    props: { post, allPost },
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

export default function Articles({ post, allPost }) {
  const [nextPost, setNextPost] = useState({});
  const [prevPost, setPrevPost] = useState({});

  const router = useRouter();
  useEffect(() => {
    if (allPost !== undefined && allPost[allPost.length - 1]) {
      setNextPost(allPost[slugIndex + 1]);
    }

    if (allPost !== undefined && slugIndex !== 0) {
      setPrevPost(allPost[slugIndex - 1]);
    }
  }, [allPost, slugIndex]);


  if (!router.isFallback) {
    var slugIndex = allPost
      .map((allpost) => {
        return allpost.slug;
      })
      .indexOf(router.query.slug);
  }

  if (router.isFallback) {
    return <h1 style={{ color: "black" }}>Loading...</h1>;
  }

  if (typeof window !== "undefined") {
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = post.slug;
    };

    const script = document.createElement("script");
    script.src = "https://bloggy-5.disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now().toString());

    document.body.appendChild(script);
  }

  return (
    <Layout article post={post}>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <div className={`${style.container} ${articlestyle.article}`}>
        <div className="main-wrapper">
          <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
          <div className="social-links">
            <h6>Share on:</h6>
            <p>
              <a href={`http://twitter.com/intent/tweet?text=`}>
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
            {prevPost ? (
              <div>
                <span>
                  <i className="fas fa-long-arrow-alt-left"></i> PREV
                </span>
                <a href={`/article/${prevPost.slug}`}>{prevPost.title}</a>
              </div>
            ) : (
              ""
            )}
            {nextPost ? (
              <div>
                <span>
                  NEXT <i className="fas fa-long-arrow-alt-right"></i>
                </span>
                <a href={`/article/${nextPost.slug}`}>{nextPost.title}</a>
              </div>
            ) : (
              ""
            )}
          </div>

          <div id="disqus_thread"></div>
        </div>
      </div>
    </Layout>
  );
}
