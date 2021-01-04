import React from "react";
import VideosListItem from "./VideosListItem";

const VideosList = ({ videos }) => {
  return (
    <ul>
      <VideosListItem videos={videos} />
    </ul>
  );
};

export default VideosList;
