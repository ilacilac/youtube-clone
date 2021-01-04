import axios from "axios";
import { apiKey } from "../key";

class VideoService {
  constructor() {
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async getVideos() {
    const response = await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${apiKey}`,
        this.getRequestOptions
      )
      .then((res) => res.data.items);

    // const result = response.data.items;

    // 데이터 가공
    // const prettierResult = result.map((data) => {
    //   // const result = {
    //   //   title: part["title"],
    //   //   channelTitle: part["channelTitle"],
    //   //   thumbnails: part["thumbnails"],
    //   // };
    //   return data["snippet"]["title"];
    // });
    return response;
  }
}

export default VideoService;
