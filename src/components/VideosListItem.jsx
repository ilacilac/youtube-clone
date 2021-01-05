import React from "react";
import styles from "./VideosListItem.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const VideosListItem = ({ videos, twoCol }) => {
  return videos.map((video) => (
    <li
      className={cx("videoWrap", {
        twoCol,
      })}
      key={video.id}
    >
      <Link to={`/detail?id=${video.id}`}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.thumbnails.title}
        />
        <div className={styles.textWrap}>
          <strong>{video.snippet.title}</strong>
          <p>{video.snippet.channelTitle}</p>
        </div>
      </Link>
    </li>
  ));
};

export default VideosListItem;
