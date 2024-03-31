import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { asyncsignupUser } from "../../store/actions/userAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Signup = () => {
  // Initialize ScrollTrigger
  
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
      name:"",
      email: "",
      password: ""
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(e.target.value)
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault()
      try {
          if (!formData.email || !formData.password || formData.name.length < 8 ) {
              throw new Error("All fields are required, and name must be at least 4 characters long");
          }
          console.log(formData)
          await dispatch(asyncsignupUser(formData));
          navigate('/signin');
      } catch (error) {
          console.error("Signup failed", error);
          toast.error(error.message || "Signup failed. Please try again.", {
              position: "top-center",
          });
      }
  };

  
  // Create refs for elements you want to animate
  const formRef = useRef(null);

  // Animation function using GSAP and ScrollTrigger
  const animateSignup = () => {
    const inputs = formRef.current.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    gsap.from(inputs, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2, // Stagger the animation for each input field
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%", // Change this value according to your requirements
        end: "bottom 20%", // Change this value according to your requirements
        toggleActions: "play none none none",
      },
    });
  };

  // Run the animation on component mount
  useEffect(() => {
    animateSignup();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Infobotics
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div
            ref={formRef} // Assign the ref to the element you want to animate
            className="p-6 space-y-4 md:space-y-6 sm:p-8"
          >
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an Account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Full Name"
                  required onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"  onChange={handleChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"  onChange={handleChange}
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
           
              <button
                type="submit" onClick={handleSignUp}
                className="bg-sky-600 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
