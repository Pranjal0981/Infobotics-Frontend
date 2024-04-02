import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReadBreakingNews } from "../../store/actions/blogAction";
import Spinner from "../Loader";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    const dispatch = useDispatch();
    const { blog, loading } = useSelector((state) => state.blog);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        dispatch(asyncReadBreakingNews())
            .then(() => {
                // Hide spinner after a delay (e.g., 500ms) to make it more noticeable
                setTimeout(() => {
                    setShowSpinner(false);
                }, 500);
            })
            .catch((error) => {
                console.error("Error fetching breaking news:", error);
                setShowSpinner(false); // Hide spinner in case of error
            });
    }, [dispatch]);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-6">Blog with Category 'Breaking News'</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(loading || (blog && blog.length === 0)) && showSpinner ? (
                    <Spinner loading={true} />
                ) : blog && Array.isArray(blog) && blog.length > 0 ? (
                    blog.map((blogItem) => (
                        <div key={blogItem._id} className="bg-white shadow-md rounded-md p-6">
                            <h3 className="text-lg font-semibold mb-2">{blogItem.title}</h3>
                            {blogItem.blogImage && <img src={blogItem.blogImage.url} alt={blogItem.title} className="mb-4" />}
                            <Link to={`/blog/${blogItem._id}`} className="text-blue-500 hover:underline">Explore Blog</Link>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500">By - {blogItem?.author?.name}</span>
                                <span className="text-gray-500">{new Date(blogItem.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No blog data available.</p>
                )}
            </div>
        </div>
    );
};

export default BreakingNews;
