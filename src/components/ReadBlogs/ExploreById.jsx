import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncReadBlogById } from "../../store/actions/blogAction";

const ExploreById = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { blog } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(asyncReadBlogById(id));
    }, [dispatch, id]);

    return (
        <div className="container mx-auto px-4 py-8">
            {blog && (
                <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    {blog.blogImage && (
                        <img src={blog.blogImage.url} alt="Blog Image" className="w-full h-64 object-cover" />
                    )}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                        <p className="text-gray-600 mb-2">Category: {blog.category}</p>
                        <p className="text-gray-600 mb-2">Date: {new Date(blog.date).toLocaleDateString()}</p>
                        <p className="text-gray-700 mb-4">{blog.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExploreById;
