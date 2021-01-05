import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
const Header = (props) => {
  return (
    <header>
      <button className={styles.headerMenu}>메뉴</button>
      <h1 className={styles.logo}>
        <Link to="/">
          <img src="./images/logo.png" alt="youtube" />
          <span>YouTube</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
