import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Style.module.css";
import articlesstyle from "../styles/Articles.module.css";
import Date from "../component/date";
import Layout from "../component/layout";

//BLOG_URL, CONTENT_API_KEY

async function getPosts(page) {
  const res = await fetch(
    `${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&include=tags,authors&limit=5&page=${page}`
  ).then((res) => res.json());

  const posts = res;

  return posts;
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  console.log(page);
  let articleData = null;
  try {
    articleData = await getPosts(page);
  } catch (error) {
    articleData = { error: { message: error.message } };
  }
  return {
    props: { articleData },
  };
};

export default function Articles({ articleData, meta }) {
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const router = useRouter();

  console.log(articleData);

  const articleListRef = useRef(null);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  const handleNext = () => {
    router.push(`/articles/?page=${articleData.meta.pagination.page + 1}`);
    articleListRef.current.scrollIntoView();
  };

  const handlePrev = () => {
    router.push(`/articles/?page=${articleData.meta.pagination.page - 1}`);
    articleListRef.current.scrollIntoView();
  };

  console.log(router);
  return (
    <Layout articles articleListRef={articleListRef}>
      <Head>
        <title>The Wizkid Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${style.container} ${articlesstyle.articles}`}>
        <div className="articles-wrapper">
          <div className={style.row}>
            {loading && (
              <div className="loading">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            {articleData.posts.length > 0 &&
              articleData.posts.map((post, index) => {
                return (
                  <div
                    key={post.id}
                    className={`${style.colmd4} ${style.colsm6} ${articlesstyle.articleitem}`}>
                    <div>
                      <Link
                        className={style.block}
                        href="/article/[slug]"
                        as={`/article/${post.slug}`}>
                        <img
                          src={post.feature_image}
                          width={640}
                          height={480}
                          alt={post.title}
                        />
                      </Link>
                    </div>
                    <div>
                      <p className={style.dflex}>
                        <span>
                          <Date dateString={post.published_at} />
                        </span>
                        <span>
                          {post.reading_time}
                          {post.reading_time > 1 ? "mins" : "min"} read
                        </span>
                      </p>
                      <h4>
                        <Link
                          href="/article/[slug]"
                          as={`/article/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <button
              disabled={!articleData.meta.pagination.prev}
              onClick={handlePrev}>
              Previous Page
            </button>
            <button
              disabled={!articleData.meta.pagination.next}
              onClick={handleNext}>
              Next Page
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
