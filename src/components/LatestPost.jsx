import { useDispatch, useSelector } from "react-redux";
import { setLatestBlogs, loading } from "../store/reducers/blogSlice"; // Assuming you have action creators for setting latest blogs and loading state
import { useEffect, useState } from "react";
import axios from "../config/axios";

const LatestBlogs = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.blog); 
    const [latestBlog, setLatestBlog] = useState([]); // Corrected variable name
    useEffect(() => {
        const fetchLatestBlogs = async () => {
            try {
                
                const response = await axios.get("/getlatestblog"); 
                dispatch(setLatestBlogs(response.data)); 
                console.log(response.data.data)
                setLatestBlog(response.data.data)
            } catch (error) {
                console.error("Error fetching latest blogs:", error);
            } 
        };

        fetchLatestBlogs(); 
    }, [dispatch]);
    const [currentDate, setCurrentDate] = useState(new Date()); // Define currentDate state using useState

    const popularPosts = Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="flex justify-evenly mt-[20px] ">
            <h1 className="text-gray-500 text-6xl">{index + 1}</h1>
            <div className="flex flex-col">
                <h1 className="font-bold">Organize the content moderators</h1>
                <h1>Pranjal Shukla</h1>
                <h1>UI/UX Design</h1>

            </div>
        </div>
    ));


    return<>
    <div className="flex flex-col h-[330vh] w-full md:flex-row w-full gap-[40px] justify-between p-10 md:h-[100%]">
        <div className="left w-full md:w-[60%] flex flex-col gap-[20px] h-full">
            <h1 className="text-[40px]">Latest Posts</h1>
            <div className="bg-slate-400 w-full h-[5px] rounded-full"></div>
            <div className="flex flex-wrap gap-[100px]">
    {latestBlog.map((blog, index) => (
        <div key={index} className="flex flex-col gap-4 md:w-1/2 lg:w-1/2 xl:w-1/3">
            <div className="overflow-hidden">
                <img src={blog?.blogImage?.url} alt="" className="w-[370px] h-[300px]" />
            </div>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            {index % 2 === 1 && <div className="w-full"></div>}
            {(index + 1) % 2 === 0 && <div className="w-full md:w-0 lg:w-0 xl:w-0"></div>}
        </div>
    ))}
</div>
            
        </div>
        <div className="right w-full w-[40%] flex flex-col gap-[20px]">
                <h1 className="text-[40px]">Popular Posts</h1>
                <div className="bg-slate-300 w-full h-[5px] rounded-full">

                </div>
                <div className=" w-[90%] flex flex-col gap-[30px] h-[160vh] overflow-y-auto scroller">
                    {popularPosts}
                </div>
            </div>
    </div>
    
    </>
}
export default LatestBlogs;