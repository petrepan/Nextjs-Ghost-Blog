import Head from "next/head";
import Header from "./header";

const layout = ({ home, children, articles, article, post, articleListRef }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"></link>
      </Head>
          <Header articleListRef={articleListRef} home={home} articles={articles} article={article} post={post} />
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
