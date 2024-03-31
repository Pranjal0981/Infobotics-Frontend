import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Second from "./Second";
import LatestPost from "./LatestPost";
import { useSelector } from "react-redux";

const Home = () => {
  
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation for left section
    tl.from(leftRef.current, { opacity: 0, y: -90, duration: 1 });

    // Animation for right section
    tl.from(rightRef.current, { opacity: 0, scale: 0.9, duration: 1 }, '-=0.5');

    ScrollTrigger.batch([leftRef.current, rightRef.current], {
      start: 'top 80%',
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, stagger: 0.5 }),
    });

    // Animation for buttons
    gsap.from(".button", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".button",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      tl.kill(); // Kill the timeline on unmount for performance
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row h-[100vh] bg-gradient-to-r from-teal-300 to-teal-500">
      <div ref={leftRef} className="left md:w-[50%] flex flex-col items-center justify-center p-10 text-emerald-50">
        <h1 className="text-4xl md:text-6xl mb-4">Welcome to Infobotics</h1>
        <p className="text-lg md:text-xl text-center mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos illum, dolorem
          molestiae quae dolor facilis neque velit deserunt. Perferendis mollitia corporis aliquid rem,
          odit quos sunt consequatur qui aperiam?
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="button bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900">Learn More</button>
          <button
            className="button border border-red-100 py-2 px-6 rounded-md hover:bg-cyan-600 hover:text-white transition duration-150 ease-out"
          >
            Create an account
          </button>
        </div>
      </div>
      <div
        ref={rightRef}
        className="right md:w-[50%] h-[80vh] md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('topimg.jpg')" }}
      >
        {/* Replace 'your-image-url.jpg' with the URL of your background image */}
      </div>
  
    </div>
    <Second/>
      <LatestPost/>
    </>
  
     
  );
};

export default Home;
