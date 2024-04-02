import { useDispatch, useSelector } from "react-redux";
import { asyncReadSports } from "../../store/actions/blogAction";
import { useEffect } from "react";
import Spinner from "../Loader";
import { Link } from "react-router-dom";

const Sports = () => {
    const dispatch = useDispatch();
    const { blog, loading } = useSelector((state) => state.blog); 
    console.log(blog);

    useEffect(() => {
        dispatch(asyncReadSports());
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-6">Blog with Category 'Sports'</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <Spinner loading={loading} />
                ) : blog.length === 0 ? (
                    <p>No data available.</p>
                ) : (
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
                )}
            </div>
        </div>
    );
};

export default Sports;
