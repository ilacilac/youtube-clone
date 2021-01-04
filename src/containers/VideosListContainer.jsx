import React, { useEffect, useState } from "react";
import VideosList from "../components/VideosList";
import VideoService from "../services/VideoService";

const VideosListContainer = (props) => {
  const youtube = new VideoService();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.getVideos().then((videos) => setVideos(videos));
  }, []);
  return <VideosList videos={videos} />;
};

export default VideosListContainer;
