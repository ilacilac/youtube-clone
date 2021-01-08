import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import { useCallback, useEffect, useMemo, useState } from "react";
import VideoService from "./services/VideoService";
import { useHistory } from "react-router-dom";

function App() {
  const youtube = new VideoService();
  const [videos, setVideos] = useState([]);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    youtube.searchVideos(text).then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube.getVideos().then((videos) => setVideos(videos));
  }, []);

  useEffect(() => {
    setVideos(videos);
  }, [videos]);

  return (
    <BrowserRouter>
      <Header
        onSubmit={onSubmit}
        onChange={onChange}
        text={text}
        videos={videos}
      />
      <Route exact path="/" render={() => <Main videos={videos} />} />
      <Route
        path="/detail"
        component={(props) => <DetailPage {...props} videos={videos} />}
      />
      <Route
        path="/search"
        component={(props) => <SearchPage {...props} videos={videos} />}
      />
    </BrowserRouter>
  );
}

export default App;
