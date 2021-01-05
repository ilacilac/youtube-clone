import React from "react";
import styles from "./VideosListItem.module.scss";

const VideosListItem = ({ videos }) => {
  console.log(videos);
  return videos.map((video) => (
    <li className={styles.videoWrap}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.thumbnails.title}
      />
      <strong>{video.snippet.title}</strong>
      <p>{video.snippet.channelTitle}</p>
    </li>
  ));
};

export default VideosListItem;
