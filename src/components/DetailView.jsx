import React from "react";
import styles from "./DetailView.module.scss";
import VideosList from "./VideosList";

const DetailView = ({ videoId, videos }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log(videos);
  return (
    <>
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videoId}
        ></iframe>
      </div>
      <VideosList videos={videos} twoCol={true} />
    </>
  );
};

export default DetailView;
