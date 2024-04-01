import { saveBlog, removeBlog} from "../reducers/blogSlice";
import axios from "../../config/axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for React Toastify

export const asyncPostBlog = (blogdata, id) => async (dispatch, getState) => {
  try {
    console.log(blogdata, id);
    const response = await axios.post("/post-blog", blogdata, id);
    if (response && response.data && response.data.data) {
      dispatch(saveBlog(response.data.data));
      toast.success('Blog post saved successfully');
    } else {
      console.error('Invalid response format from server:', response.data);
      toast.error('Invalid response format from server');
    }

    return response.data;
  } catch (error) {
    console.error('Error posting blog:', error.response?.data || error.message);
    toast.error('Error posting blog');
    throw error;
  }
};

export const asyncReadOthers = () => async (dispatch, getState) => {
    try {
        
        const response = await axios.get("/other-blog" );
        console.log(response)
        if (response && response.data && response.data.data) {
            dispatch(saveBlog(response.data.data));
        } else {
            console.error('Invalid response format from server:', response.data);
        }
    
        return response.data;
    } catch (error) {
        console.error('Error fetching current user data:', error.response?.data || error.message);
        throw error;
    }
};



export const asyncReadEntertainment = () => async (dispatch, getState) => {
    try {
        
        const response = await axios.get("/entertainment-blog" );
        console.log(response)
        if (response && response.data && response.data.data) {
            dispatch(saveBlog(response.data.data));
        } else {
            console.error('Invalid response format from server:', response.data);
        }
    
        return response.data;
    } catch (error) {
        console.error('Error fetching current user data:', error.response?.data || error.message);
        throw error;
    }
};

export const asyncReadSports = () => async (dispatch, getState) => {
    try {
        
        const response = await axios.get("/sports-blog" );
        console.log(response)
        if (response && response.data && response.data.data) {
            dispatch(saveBlog(response.data.data));
        } else {
            console.error('Invalid response format from server:', response.data);
        }
    
        return response.data;
    } catch (error) {
        console.error('Error fetching current user data:', error.response?.data || error.message);
        throw error;
    }
};


export const asyncReadBreakingNews = () => async (dispatch, getState) => {
    try {
        
        const response = await axios.get("/breakingnews-blog" );
        console.log(response)
        if (response && response.data && response.data.data) {
            dispatch(saveBlog(response.data.data));
        } else {
            console.error('Invalid response format from server:', response.data);
        }
    
        return response.data;
    } catch (error) {
        console.error('Error fetching current user data:', error.response?.data || error.message);
        throw error;
    }
};


export const asyncReadTechnology = () => async (dispatch, getState) => {
    try {
        
        const response = await axios.get("/technology-blog" );
        console.log(response)
        if (response && response.data && response.data.data) {
            dispatch(saveBlog(response.data.data));
        } else {
            console.error('Invalid response format from server:', response.data);
        }
    
        return response.data;
    } catch (error) {
        console.error('Error fetching current user data:', error.response?.data || error.message);
        throw error;
    }
};


export const asyncCurrentUserBlog=(userId)=>async(dispatch,getState)=>{
    try{
        const response = await axios.post('/getcurrentuserblogs', { userId }); // Send userId in the request body
        console.log(response)
        dispatch(saveBlog(response.data.data))
    }
    catch(err){
        console.log(err)
    }
}


export const asyncBlogDeleteById = (blogId) => async (dispatch, getState) => {
    try {
        const response = await axios.delete(`/deleteblog/${blogId}`);
        console.log("Blog deleted successfully:", response.data);
    } catch (error) {
        console.error("Error deleting blog:", error);
    }
};


export const asyncReadBlogById = (blogId) => async (dispatch, getState) => {
    try {
        console.log(blogId)
        const response = await axios.get(`/blog/${blogId}`);
        console.log(response.data)
         dispatch(saveBlog(response.data.data));
            return response.data.data;
    } catch (error) {
        console.error("Error fetching blog:", error);
        throw error; // Rethrow the error to handle it in the component
    }
};
