import React, { useMemo } from "react";
import VideosListItem from "./VideosListItem";
import styles from "./VideosList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const VideosList = ({ videos, twoCol }) => {
  return (
    <ul
      className={cx("videosWrap", {
        twoCol,
      })}
    >
      <VideosListItem videos={videos} twoCol={twoCol} />
    </ul>
  );
};

export default VideosList;
