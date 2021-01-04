import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoService from "./services/VideoService";

function App() {
  const youtube = new VideoService();

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
