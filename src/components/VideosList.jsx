import React from "react";
import VideosListItem from "./VideosListItem";
import styles from "./VideosList.module.scss";

const VideosList = ({ videos }) => {
  return (
    <ul className={styles.videosWrap}>
      <VideosListItem videos={videos} />
    </ul>
  );
};

export default VideosList;
