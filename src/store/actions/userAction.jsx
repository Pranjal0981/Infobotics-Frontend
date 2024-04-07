import { saveUser, saveAvatar, removeUser } from "../reducers/userSlice";
import axios from "../../config/axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const asyncCurrentUser = (token) => async (dispatch, getState) => {
    try {
        const response = await axios.post("/user");

        if (response && response.data && response.data.user) {
            console.log(response)
            dispatch(saveUser(response.data.user));
        } else {
            console.error('Invalid response format from server:', response.data);
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching current user data:', error.response?.data || error.message);
        throw error;
    }
};



export const asyncsignupUser = (user) => async (dispatch, getState) => {
    try {
        console.log(user)
        await axios.post("/signup", user);
        console.log(user)
        toast.success('Signup successful!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
    } catch (error) {
        console.log(error.response.data);
        toast.error('Signup failed!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
};


export const asyncsigninUser = (user) => async (dispatch, getState) => {
    try {
        const response = await axios.post("/signin", user);
        console.log(response.data.token)
        if (response.status == 200) {
            window.localStorage.setItem("token", response.data.token)
            await dispatch(asyncCurrentUser(response.data.token))

        }
        toast.success('Login successful!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        toast.error('Login failed!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        throw error;
    }
};

export const asyncUpdateUser = (user, id) => async (dispatch, getState) => {
    try {
        console.log(user)
        const response = await axios.post(`/update/${id}`, user);
       await dispatch(asyncCurrentUser());
       await dispatch(saveUser(response.data.user))
        toast.success('Profile updated successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });

        return response.data;
    } catch (error) {
        console.log(error.response.data);
        toast.error('Error updating student profile!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        throw error;
    }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
    try {
        await axios.get("/signout");
        await dispatch(removeUser());
        toast.success('Logout successful!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
    } catch (error) {
        console.log(error.response.data);
        toast.error('Error during logout!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
    try {
        await axios.post(`/delete/${id}`)
        await dispatch(removeUser())
        await dispatch(asyncCurrentUser())
    } catch (error) {
        console.log(error)
    }
}

