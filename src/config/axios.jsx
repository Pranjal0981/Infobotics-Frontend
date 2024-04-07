import axios from "axios";

const instance = axios.create({
    baseURL:
        "https://info-back.vercel.app/",
    withCredentials: true,
});

export default instance;