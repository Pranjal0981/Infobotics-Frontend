import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { asyncsigninUser } from "../../store/actions/userAction";
const Signin = () => {
  // Initialize ScrollTrigger
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  gsap.registerPlugin(ScrollTrigger);
  const [formError, setFormError] = useState(null);
 
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(asyncsigninUser({ email, password }));
      await navigate('/')
    } catch (error) {
      console.log(error)
    }
  };
  // Create refs for elements you want to animate
  const formRef = useRef(null);

  // Animation function using GSAP and ScrollTrigger
  const animateSignin = () => {
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

  // Run the animation on component mount
  useEffect(() => {
    animateSignin();
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
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formError && !email ? "border-red-500" : ""}`}
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
                  type="password"
                  name="password"
                  id="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formError && !password ? "border-red-500" : ""}`}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                
                <Link
                  to="/forget-password"
                  className="text-blue-500 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              {formError && (
            <div className="text-red-500 mb-4 text-center">{formError}</div>
          )}
              <button
                type="submit" onClick={handleSignin}
                className="bg-sky-600 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
                
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
