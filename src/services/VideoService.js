import axios from "axios";
import { apiKey } from "../key";

class VideoService {
  async getVideos() {
    const response = await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=32&key=${apiKey}`
      )
      .then((res) => res.data.items);
    return response;
  }
  async searchVideos(query) {
    const response = await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&type=video&key=${apiKey}`
      )
      .then((res) => res.data.items)
      .then((result) => {
        return result.map((item) => ({ ...item, id: item.id.videoId }));
      });
    return response;
  }
}

export default VideoService;
