import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "64c6448b3a4a319cef27f2de73f34e4d",
        language: "ko-KR",
    }
});

export default instance;