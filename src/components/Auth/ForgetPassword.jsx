import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import axios from '../../config/axios';
import { toast } from "react-toastify";

const ForgetPassword = () => {
  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  const [email, setEmail] = useState('');

  // Create a ref for the form element
  const formRef = useRef(null);

  // Animation function using GSAP and ScrollTrigger
  const animateForgetPassword = () => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%", // Adjust as needed
        end: "bottom 20%", // Adjust as needed
        toggleActions: "play none none none",
      },
    });
  };

  const sendResetLink = async (e) => {
    e.preventDefault();
    console.log(`Reset link sent to ${email} `);
    try {
      const response = await axios.post('/send-mail', { email });
      console.log(response);
      toast.success(
        "Reset link sent to your email. Please check your email.", { position: 'top-center' }
      );
    } catch (error) {
      console.log(error);
      toast.error('Email not found!', { position: 'top-center' });
    }
  };

  const handleReset = (e) => {
    sendResetLink(e); // Pass the event object to sendResetLink function
  };

  // Run the animation on component mount
  useEffect(() => {
    animateForgetPassword();
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
              Forgot Your Password?
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button
                type="submit" onClick={handleReset}
                className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Remember your password?{" "}
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

export default ForgetPassword;
