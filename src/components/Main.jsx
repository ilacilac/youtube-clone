import React from "react";
import VideosList from "./VideosList";

const Main = ({ videos }) => {
  return (
    <>
      <main>
        <h2 className="a11y-hidden">동영상 목록</h2>
        <VideosList videos={videos} />
      </main>
    </>
  );
};

export default Main;
