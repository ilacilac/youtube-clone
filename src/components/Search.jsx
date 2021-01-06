import React from "react";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";

const cx = classNames.bind(styles);

const Search = ({ text, onChange, searchButtonClick, searchButtonEnter }) => {
  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={onChange}
        onKeyUp={searchButtonEnter}
        className={styles.searchBox}
      />
      <button
        type="button"
        onClick={searchButtonClick}
        className={cx("searchBtn")}
      >
        <span className="a11y-hidden">검색</span>
        <IconContext.Provider value={{ color: "#b3b3b3" }}>
          <MdSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default Search;
