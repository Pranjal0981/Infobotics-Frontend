import axios from "axios";
const token = window.localStorage.getItem("token")
const instance = axios.create(

    {
        baseURL: "http://localhost:3000",
        withCredentials: true,
        headers: {
            Authorization: token
        }

    });

export default instance;