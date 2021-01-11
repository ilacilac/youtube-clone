import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Search from "./Search";
import { withRouter } from "react-router-dom";
const Header = ({ text, onChange, onSubmit, onMain }) => {
  return (
    <header>
      <h1 className={styles.logo} onClick={onMain}>
        <Link to="/">
          <img src="./images/logo.png" alt="youtube" />
          <span>YouTube</span>
        </Link>
      </h1>
      <Search text={text} onChange={onChange} onSubmit={onSubmit} />
    </header>
  );
};

export default withRouter(Header);
