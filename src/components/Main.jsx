import React, { useState } from "react";
import VideosListContainer from "../containers/VideosListContainer";

const Main = (props) => {
  return (
    <>
      <main>
        <h2>동영상 목록</h2>
        <VideosListContainer />
      </main>
    </>
  );
};

export default Main;
