import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // from TMDB->GENRES->MOVIE LIST->NODE-FETCH REQUEST-> URL
});
export default instance;
