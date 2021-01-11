import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { withRouter } from "react-router-dom";

function App({ youtube, history }) {
  console.log(history);
  const [videos, setVideos] = useState([]);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onMain = useCallback(() => {
    setText("");
    youtube.getVideos().then((videos) => setVideos(videos));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    youtube.searchVideos(text).then((videos) => setVideos(videos));
    history.push(`search?q=${text}`);
    setText("");
  }, []);

  useEffect(() => {
    youtube.getVideos().then((videos) => setVideos(videos));
  }, []);

  useEffect(() => {
    setVideos(videos);
  }, [videos]);

  return (
    <>
      <Header
        onSubmit={onSubmit}
        onChange={onChange}
        text={text}
        videos={videos}
        onMain={onMain}
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
    </>
  );
}

export default withRouter(App);
