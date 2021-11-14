import axios from "axios";

const KEY = "AIzaSyAuD_hMG8dAog1OQ6ZxNLN1apqASRDNGPY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
