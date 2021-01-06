import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Search from "./Search";
const Header = ({ text, onChange, searchButtonClick, searchButtonEnter }) => {
  return (
    <header>
      <h1 className={styles.logo}>
        <Link to="/">
          <img src="./images/logo.png" alt="youtube" />
          <span>YouTube</span>
        </Link>
      </h1>
      <Search
        text={text}
        onChange={onChange}
        searchButtonClick={searchButtonClick}
        searchButtonEnter={searchButtonEnter}
      />
    </header>
  );
};

export default Header;
