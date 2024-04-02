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
    <footer className="bg-zinc-200 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-item">
            <h2 className="text-xl font-bold mb-4 text-black">Connect with Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-700 transition duration-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-700 transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-700 transition duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="footer-item">
            <h2 className="text-xl font-bold mb-4 text-black">Useful Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-teal-700 transition duration-300">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-teal-700 transition duration-300">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-teal-700 transition duration-300">Contact Us</a></li>
            </ul>
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
