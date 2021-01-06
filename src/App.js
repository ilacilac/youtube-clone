import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import { useCallback, useEffect, useMemo, useState } from "react";
import VideoService from "./services/VideoService";

function App() {
  const youtube = new VideoService();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.getVideos().then((videos) => setVideos(videos));
  }, []);

  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const searchButtonClick = (e) => {
    // searchVideo
    e.preventDefault();
    console.log("검색하기");
    youtube.searchVideos(text).then((videos) => setVideos(videos));
    console.log(videos);
  };

  const searchButtonEnter = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.key === "Enter") {
      console.log("enter");
      searchButtonClick();
    }
  };

  useEffect(() => {
    setVideos(videos);
  }, [videos]);

  return (
    <BrowserRouter>
      <Header
        searchButtonClick={searchButtonClick}
        searchButtonEnter={searchButtonEnter}
        onChange={onChange}
        text={text}
      />
      <Route exact path="/" render={() => <Main videos={videos} />} />
      <Route
        path="/detail"
        component={(props) => <DetailPage {...props} videos={videos} />}
      />
    </BrowserRouter>
  );
}

export default App;
