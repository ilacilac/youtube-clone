import React from "react";
import VideosList from "../components/VideosList";

const SearchPage = ({ videos, location }) => {
  console.log(location);
  // const videoId = location.search.split("=")[1];
  return (
    <>
      <main>
        <h2 className="a11y-hidden">동영상 목록</h2>
        <VideosList videos={videos} />
      </main>
    </>
  );
};

export default SearchPage;
