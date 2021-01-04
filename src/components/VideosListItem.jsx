import React from "react";

const VideosListItem = ({ videos }) => {
  console.log(videos);
  return videos.map((video) => <li>{video.snippet.title}</li>);
};

export default VideosListItem;
