import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blog: [],
    loading:false,
    latestBlogs:[]
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        saveBlog: (state, action) => {
            console.log(action.payload)
            state.blog = action.payload;
            state.loading = false; // Set loading state to true when saving blog data

        },
        removeBlog: (state, action) => {
            state.blog = null;
            state.token = null;
            state.isAuth = false;
        },
        setLatestBlogs: (state, action) => {
            state.latestBlogs = action.payload; // Update the latestBlogs array with the payload
            state.loading = false; // Set loading state to false after updating latestBlogs
        },
        setLoading: (state, action) => {
            state.loading = action.payload; // Set loading state based on action payload
        },
    },
});

export const { saveBlog,saveBlogImage, loading,setLatestBlogs,removeBlog,setLoading} = blogSlice.actions;

export default blogSlice.reducer;