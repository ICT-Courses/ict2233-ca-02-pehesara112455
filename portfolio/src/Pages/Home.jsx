import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import image1 from "../assets/IMG_5599[1].JPG";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [animatePage, setAnimatePage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePage(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col bg-white">

      <div className="w-full flex flex-col bg-white px-6 md:px-20 pt-10">
        {/* Image + Text Section */}
       <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-12">
  {/* Image */}
 <div
  className={`transition-all duration-1000 ease-out transform ${
    animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <img
    src={image1}
    alt="Profile"
    className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-[rgba(16,185,129,0.7)] object-cover shadow-[0_25px_60px_-10px_rgba(16,185,129,0.7)] hover:shadow-[0_30px_80px_-10px_rgba(16,185,129,0.9)] transition-shadow duration-500"
  />
</div>

  {/* Text */}
  <div
    className={`max-w-2xl transition-all duration-1000 ease-out transform ${
      animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug text-center md:text-left space-y-2">
      <span className="text-black block">I'm</span>
      <span className="text-emerald-700 block">Uditha Pehesara,</span>
      <span className="text-black block">Frontend developer and Graphic designer</span>
      <span className="text-emerald-700 block">in Sri Lanka</span>
    </h1>
  </div>
</div>

        {/* Paragraph */}
        <div
          className={`flex justify-center items-center px-4 md:px-10 py-8 text-lg sm:text-xl transition-all duration-1000 ease-out transform ${
            animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-center text-gray-500 max-w-3xl leading-relaxed">
            A passionate student from a software engineering background, specializing in building
            exceptional digital experiences. Currently focusing on modern web technologies like
            React, Tailwind, and more.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 sm:gap-6 py-6 transition-all duration-1000 ease-out transform ${
            animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link to="/projects">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
            View Projects
          </button>
          </Link>
          <Link to="/contact">
             <button className="bg-white hover:bg-gray-100 text-emerald-700 font-semibold py-3 px-6 border border-emerald-600 rounded-lg shadow-md transition duration-300 ease-in-out">
            Contact Me
          </button>
          </Link>
          
         
          <a
            href="/assets/Uditha-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-300 hover:bg-green-400 text-gray-600 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            My Resume
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;