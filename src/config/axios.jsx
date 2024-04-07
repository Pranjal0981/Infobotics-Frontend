import axios from "axios";

const instance = axios.create({
    baseURL:
        "https://infobotics.vercel.app/",
    withCredentials: true,
});

export default instance;