import React from "react";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";

const cx = classNames.bind(styles);

const Search = ({ text, onChange, onSubmit }) => {
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={onChange}
        className={styles.searchBox}
      />
      <button type="submit" className={cx("searchBtn")}>
        <span className="a11y-hidden">검색</span>
        <IconContext.Provider
          value={{ color: "#b3b3b3", className: "search-icon" }}
        >
          <MdSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default Search;
