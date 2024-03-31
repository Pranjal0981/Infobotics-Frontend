import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blog: [],
    loading:false
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        saveBlog: (state, action) => {
            console.log(action.payload)
            state.blog = action.payload;
            state.loading = true; // Set loading state to true when saving blog data

        },
        removeBlog: (state, action) => {
            state.blog = null;
            state.token = null;
            state.isAuth = false;
        },
        
    },
});

export const { saveBlog,saveBlogImage, removeBlog} = blogSlice.actions;

export default blogSlice.reducer;