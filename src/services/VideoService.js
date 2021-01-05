import axios from "axios";
import { apiKey } from "../key";

class VideoService {
  async getVideos() {
    const response = await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=32&key=${apiKey}`
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
