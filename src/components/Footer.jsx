import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Make sure to register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.utils.toArray('.footer-item').forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <footer className="bg-zinc-200	 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-item">
            <h2 className="text-xl font-bold mb-4 text-black">Explore</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-400">Trending Topics</a></li>
              <li><a href="#" className="text-black hover:text-gray-400">Latest Articles</a></li>
              <li><a href="#" className="text-black hover:text-gray-400">Exclusive Insights</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="text-xl font-bold mb-4 text-black">Connect with Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-700	 transition duration-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-700	 transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-700	 transition duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="footer-item">
            <h2 className="text-xl font-bold mb-4 text-black">Subscribe for Updates</h2>
            <form className="flex items-center space-x-2">
              <input type="email" placeholder="Your email address" className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" />
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Subscribe
</span>
</button>
            </form>
          </div>
        </div>
        <div className="text-black mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Infobotics. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">Crafted with <span role="img" aria-label="heart">❤️</span> by Pranjal Shukla</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
