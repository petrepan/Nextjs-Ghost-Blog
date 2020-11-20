import Head from "next/head";
import Header from "./header";

const layout = ({
  home,
  children,
  articles,
  article,
  post,
  articleListRef,
}) => {
  return (
    <div>
      <Header
        articleListRef={articleListRef}
        home={home}
        articles={articles}
        article={article}
        post={post}
      />
      {!home ? <main>{children}</main> : ""}
      {!home ? (
        <footer>
          <div>
            <h4>FOLLOW ME ON SOCIAL MEDIA</h4>
            <div className="social-links">
              <p>
                <a href="">
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
          </div>
        </footer>
      ) : (
        ""
      )}
    </div>
  );
};

export default layout;
