import React from "react";
import DetailView from "../components/DetailView";

const DetailPage = ({ videos, location }) => {
  const videoId = location.search.split("=")[1];
  return (
    <>
      <DetailView videoId={videoId} videos={videos} />
    </>
  );
};

export default DetailPage;
