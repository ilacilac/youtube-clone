import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoService from "./services/VideoService";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
