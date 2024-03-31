import { useDispatch, useSelector } from "react-redux";
import { asyncReadOthers } from "../../store/actions/blogAction";
import { useEffect } from "react";
import Spinner from "../Loader";

const Others = () => {
    const dispatch = useDispatch();
    const { blog,loading } = useSelector((state) => state.blog); 
    // console.log(blog[0].author.name)
    useEffect(() => {
        dispatch(asyncReadOthers());
    }, []);

    return (
        <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-6">Blog with Category 'Other'</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
                 blog && blog.map(blogItem => (
                    <div key={blogItem._id} className="bg-white shadow-md rounded-md p-6">
                        <h3 className="text-lg font-semibold mb-2">{blogItem.title}</h3>
                        <img src={blogItem?.blogImage?.url} alt={blogItem.title} className="mb-4" />
                        <p className="text-gray-600 mb-4">{blogItem.description}</p>
                        <div className="flex justify-between">
                            <span className="text-gray-500">By-{blogItem?.author?.name}</span>
                            <span className="text-gray-500">{new Date(blogItem.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                ))
            ) : (
                <Spinner loading={loading} />
               
            )}
        </div>
    </div>
    );
};

export default Others;
