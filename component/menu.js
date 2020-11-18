import Link from "next/link";
import style from "../styles/Style.module.css";

const menu = ({ toggleMenu }) => {
  return (
    <div className={ `${toggleMenu ? style.menuOpen: ""} ${style.menu}`}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/article/about">About</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
      </ul>
    </div>
  );
};

export default menu;
