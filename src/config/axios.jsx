import axios from "axios";
const token = window.localStorage.getItem("token")
const instance = axios.create(

    {
        baseURL: "https://info-back.onrender.com",
        withCredentials: true,
        headers: {
            Authorization: token
        }

    });

export default instance;