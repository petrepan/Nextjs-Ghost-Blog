import { useState } from "react";
import Link from "next/link";
import style from "../styles/Style.module.css";
import homestyle from "../styles/Home.module.css";
import articlesstyle from "../styles/Articles.module.css";
import Date from "./date";
import Menu from "./menu";

const header = ({ home, articles, article, post, articleListRef }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const imgStyle = {
    backgroundImage: `url(post.feature_image)`,
  };

  return (
    <header ref={articleListRef}
      style={
        article
          ? { backgroundImage: `url(${post.feature_image})`, opacity: 0.99 }
          : {}
      }
      className={`${home ? `${homestyle.home}` : `${style.otherheader}`} ${
        style.header
      }`}>
      <div className={style.container}>
        <nav>
          <div className={style.nav}>
            <h1>
              <Link href="/">Ayọ Balogun</Link>
            </h1>
            <button
              className={toggleMenu ? style.rotate : ""}
              onClick={handleToggle}>
              <span className={style.one}></span>
              <span className={style.two}></span>
              <span className={style.three}></span>
            </button>
          </div>
          <Menu toggleMenu={toggleMenu} />
        </nav>
        {home ? (
          <div className={style.info}>
            <h1>Ayọ Balogun</h1>
            <h3>
              Nigerian singer & Writer <br /> Worldwide Superstar
            </h3>
          </div>
        ) : articles ? (
          <h1 className={articlesstyle.header}>Articles</h1>
        ) : (
          <div className={style.sectioninfo}>
            <h2>{post.title}</h2>
            <h4>
              <Date dateString={post.published_at} />
            </h4>
            <h5>
              {post.reading_time}
              {post.reading_time > 1 ? "mins" : "min"} read
            </h5>
          </div>
        )}
      </div>
    </header>
  );
};

export default header;
