import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUserBlog, asyncBlogDeleteById } from "../../store/actions/blogAction";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MyBlogs = () => {
    const { user, isAuth } = useSelector((state) => state.user);
    const { blog } = useSelector((state) => state.blog); // Assuming you have currentUserBlogs state in your Redux store
    const dispatch = useDispatch();

    useEffect(() => {
        if (user && user._id) {
            dispatch(asyncCurrentUserBlog(user._id));
        }
    }, [dispatch, user]);

    const handleDelete = (blogId) => {
        // Dispatch action to delete the blog with the given ID
        dispatch(asyncBlogDeleteById(blogId));
        dispatch(asyncCurrentUserBlog(user._id))

    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">My Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(blog) && blog.map(blog => (
                    <div key={blog?._id} className="bg-white shadow-md p-4 rounded-lg">
                        <img src={blog?.blogImage?.url} alt="Blog Image" className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{blog?.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">Category: {blog?.category}</p>
                            <Link to={`/blog/${blog._id}`}>Explore Blog</Link>
                        </div>
                        <button onClick={() => handleDelete(blog?._id)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-600">
                            Delete
                        </button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBlogs;
