const LatestPost=()=>{
       const currentDate = new Date();
  
    // Format the date as desired (e.g., "March 29, 2024")
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
    const popularPosts = Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="flex justify-evenly mt-[20px] ">
            <h1 className="text-gray-500 text-6xl">{index + 1}</h1>
            <div className="flex flex-col">
                <h1 className="font-bold">Organize the content moderators</h1>
                <h1>Pranjal Shukla</h1>
                <h1>UI/UX Design</h1>
                <p>{formattedDate}</p>
            </div>
        </div>
    ));


    return<>
    <div className="flex flex-col h-[370vh] w-full md:flex-row w-full gap-[40px] justify-between p-10 md:h-[100%]">
        <div className="left w-full md:w-[60%] flex flex-col gap-[20px] h-full">
            <h1 className="text-[40px]">Latest Posts</h1>
            <div className="bg-slate-400 w-full h-[5px] rounded-full"></div>
            <div className="flex w-full gap-[30px]">
                <div className="flex flex-col w-[50%]  h-[5px] gap-[20px]">
                 <div className="flex flex-col gap-[10px]">
                 <div className="overflow-hidden w-[24vw]">
                    
                 <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" className="w-[24vw]" alt="" />
                 </div>
                    <h1 className="text-2xl font-bold">Google Just Showed Us The Future of Gaming</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos atque consectetur labore minus quod ex repellat necessitatibus libero non.</p>
                    <p>{formattedDate}</p>
                 </div>
                 <div className="flex flex-col gap-[10px]">
                 <div className="overflow-hidden w-[24vw]">
                 <img src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-[24vw]" alt="" />
                 </div>                    <h1 className="text-2xl font-bold">Google Just Showed Us The Future of Gaming</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos atque consectetur labore minus quod ex repellat necessitatibus libero non.</p>
                    <p>{formattedDate}</p>
                 </div>
                </div>
                <div className="flex flex-col w-[50%]  h-[5px] gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                <div className="overflow-hidden w-[24vw]">
                 <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-[24vw]" alt="" />
                 </div>                    <h1 className="text-2xl font-bold">Google Just Showed Us The Future of Gaming</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos atque consectetur labore minus quod ex repellat necessitatibus libero non.</p>
                    <p>{formattedDate}</p>
                 </div>
                 <div className="flex flex-col gap-[10px]">
                 <div className="overflow-hidden w-[24vw]">
                 <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww" className="w-[24vw]" alt="" />
                 </div>                    <h1 className="text-2xl font-bold">Google Just Showed Us The Future of Gaming</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos atque consectetur labore minus quod ex repellat necessitatibus libero non.</p>
                    <p>{formattedDate}</p>
                 </div>
                </div>
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
export default LatestPost;