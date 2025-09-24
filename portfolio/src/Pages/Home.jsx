import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import image1 from '../assets/IMG_5599[1].JPG';
import Footer from '../Components/Footer'

function Home() {
  const [animatePage, setAnimatePage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePage(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col bg-white">
      <Navbar />
      

      <div className="w-full flex flex-col bg-white px-10 md:px-40 pt-10">
        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-x-6">
          {/* Image */}
          <div className={`flex-1 flex justify-center transition-all duration-1000 ease-out transform ${animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <img
              src={image1}
              alt="Profile"
              className="w-72 h-72 rounded-full border-4 border-emerald-900 object-cover"
            />
          </div>

          {/* Text */}
          <div className={`flex-1 transition-all duration-1000 ease-out transform ${animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold space-y-2">
              <span className="text-black block">I'm</span>
              <span className="text-emerald-700 block">Uditha Pehesara,</span>
              <span className="text-black block">Frontend developer and Graphic designer</span>
              <span className="text-emerald-700 block">in Sri Lanka</span>
            </h1>
          </div>
        </div>

        {/* Paragraph */}
        <div className={`flex justify-center items-center px-4 md:px-10 py-10 text-xl transition-all duration-1000 ease-out transform ${animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-center text-gray-500 max-w-3xl">
            A passionate student from a software engineering background, specializing in building exceptional digital experiences. Currently focusing on modern web technologies like React, Tailwind, and more.
          </p>
        </div>

        {/* Buttons */}
        <div className={`flex justify-center gap-15 py-6 transition-all duration-1000 ease-out transform ${animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-4xl shadow-md transition duration-300 ease-in-out">
            View Projects
          </button>
          <button className="bg-white hover:bg-gray-100 text-emerald-700 font-semibold py-3 px-6 border border-emerald-600 rounded-4xl shadow-md transition duration-300 ease-in-out">
            Contact Me
          </button>
        </div>
      </div>
        <Footer/>


    </div>
  );
}

export default Home;