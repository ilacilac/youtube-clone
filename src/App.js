import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import { useEffect, useState } from "react";
import VideoService from "./services/VideoService";

function App() {
  const youtube = new VideoService();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.getVideos().then((videos) => setVideos(videos));
  }, []);
  console.log(videos);

  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" render={() => <Main videos={videos} />} />
      <Route
        path="/detail"
        component={(props) => <DetailPage {...props} videos={videos} />}
      />
    </BrowserRouter>
  );
}

export default App;
