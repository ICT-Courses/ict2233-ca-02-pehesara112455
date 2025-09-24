import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div className="min-h-[100vh] flex flex-col bg-white px-6 md:px-0 py-0">
        
      {/* Heading */}
      <div className="text-center mb-12 py-7">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Me</h1>
        <p className="text-gray-500 text-lg">
          I'd love to hear from you! Whether it's a project, collaboration, or just a hello.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md w-full">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="abc123@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">Or connect with me on:</p>
        <div className="flex justify-center gap-6 text-2xl text-emerald-700">
          <a href="https://github.com/pehesara112455" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-amber-500 transition"></i>
          </a>
          <a href="https://www.linkedin.com/in/uditha-pehesara-7786b4381/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BQf4cTY6fQGCte%2FZYBzXFjA%3D%3D" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-amber-500 transition"></i>
          </a>
          <a href="mailto:upehesara827@gmail.com">
            <i className="fas fa-envelope hover:text-amber-500 transition"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;