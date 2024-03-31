import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Function to load state from cookies
const loadState = () => {
    try {
        const serializedState = Cookies.get("userState");
        if (serializedState === undefined) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

// Function to save state to cookies
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        Cookies.set("userState", serializedState, { expires: 1 }); // Expires in 1 day
    } catch {
        // ignore write errors
    }
};

const initialState = loadState() || {
    user: null,
    isAuth: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            saveState(state); // Save state to cookies
        },
        saveAvatar: (state, action) => {
            state.user.avatar = action.payload;
            saveState(state); // Save state to cookies
        },
        removeUser: (state) => {
            state.user = null;
            state.isAuth = false;
            Cookies.remove("userState"); // Remove state from cookies
        },
    },
});

export const { saveUser, saveAvatar, removeUser } = userSlice.actions;

export default userSlice.reducer;
