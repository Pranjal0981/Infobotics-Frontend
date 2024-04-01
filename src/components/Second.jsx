
import { LuSave } from "react-icons/lu";
const Second=()=>{
    const currentDate = new Date();
  
    // Format the date as desired (e.g., "March 29, 2024")
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  
    return<>
    <div className="flex flex-col h-[150vh] gap-[10px] w-full p-2 md:h-[100vh]">
    <h1 className="text-6xl">Featured for members</h1> 
    <div className="flex w-full h-[4px] bg-gray-100">
        <div className="w-[40%] bg-neutral-400	">

        </div>
       
    </div>
    <div className="flex flex-col  md:flex-row w-full ">
        <div className="w-full md:w-[40%] p-5">
            <div className="flex flex-col">
                <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h1 className="text-[20px]">Google Just Showed Us the future of Gaming</h1>
                <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iusto?</p>
                <h1>Pranjal Shukla</h1>
                <div className="date flex justify-between p-[10px]">
                <p> {formattedDate}</p>
                <LuSave/>
                </div>
            </div>
        </div>
        <div className="w-full h-[30%] md:w-[30%] p-5 flex flex-row gap-[20px] md:flex-col overflow-scroll md:h-full">
            <div className="flex gap-[10px]" >
            <div className="overflow-hidden w-[350px] h-[200px]">

                <img src="https://images.unsplash.com/photo-1494319827402-c4b839aed26b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJsb2d8ZW58MHx8MHx8fDA%3D" className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint.</h1>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vit</p>
                <p>{formattedDate}</p>
                </div>
               
            </div>
            <div className="flex gap-[10px]" >
            <div className="overflow-hidden w-[350px] h-[200px]">
                <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJsb2d8ZW58MHx8MHx8fDA%3D" className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint.</h1>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vit</p>
                <p>{formattedDate}</p>
                </div>
               
            </div>
            <div className="flex gap-[10px]" >
            <div className="overflow-hidden  w-[350px] h-[200px]">
                <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJsb2d8ZW58MHx8MHx8fDA%3D" className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint.</h1>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vit</p>
                <p>{formattedDate}</p>
                </div>
               
            </div>
        </div>
        <div className="w-full md:w-[30%] p-5 flex flex-row gap-[20px] md:flex-col overflow-scroll md:h-full">

        <div className="flex gap-[10px]" >
        <div className="overflow-hidden w-[350px] h-[200px] ">
                <img src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint.</h1>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vit</p>
                <p>{formattedDate}</p>
                </div>
               
            </div>
            <div className="flex gap-[10px]" >
            <div className="overflow-hidden w-[350px] h-[200px]">
                <img src="https://plus.unsplash.com/premium_photo-1676319481666-1d558d578fab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint.</h1>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vit</p>
                <p>{formattedDate}</p>
                </div>
               
            </div>
            <div className="flex gap-[10px]" >
            <div className="overflow-hidden  w-[350px] h-[200px]">
                <img src="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className=" w-full h-full" alt="" />
                </div>       
                         <div className="flex flex-col">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint.</h1>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vit</p>
                <p>{formattedDate}</p>
                </div>
               
            </div>
        </div>
    </div>
    </div>
   
    </>
}
export default Second