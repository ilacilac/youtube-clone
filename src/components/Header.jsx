import React from "react";
import styles from "./Header.module.scss";
const Header = (props) => {
  return (
    <header>
      <button className={styles.headerMenu}>메뉴</button>
      <h1 className={styles.logo}>
        <img src="./images/logo.png" alt="youtube" />
        <span>YouTube</span>
      </h1>
    </header>
  );
};

export default Header;
