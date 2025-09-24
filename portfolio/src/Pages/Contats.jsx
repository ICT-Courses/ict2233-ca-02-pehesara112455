import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  const [animatePage, setAnimatePage] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePage(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g40a15r",   
        "template_7gxg6xw",     
        e.target,
        "i6-lxdaCbOClzS5q8"  
      )
      .then(() => {
        setSent(true);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("❌ Failed to send message.");
      });

    e.target.reset();
  };

  return (
    <div className="min-h-[100vh] flex flex-col bg-white dark:bg-gray-900 px-6 md:px-0 py-0 transition-colors duration-500">
      <Navbar />

      
      <div
        className={`text-center mb-12 py-7 transition-all duration-1000 ease-out transform ${
          animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h1>
        <p className="text-gray-500 dark:text-gray-300 text-lg">
          I'd love to hear from you! Whether it's a project, collaboration, or just a hello.
        </p>
      </div>

      {/*contact form*/}
      <div
        className={`max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md w-full transition-all duration-1000 ease-out transform ${
          animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="abc123@gmail.com"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>

        {sent && (
          <p className="text-center text-green-500 mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </div>

      {/*Social media*/}
      <div
        className={`mt-12 text-center transition-all duration-1000 ease-out transform ${
          animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-gray-500 dark:text-gray-300 mb-4">Or connect with me on:</p>
        <div className="flex justify-center gap-6 text-2xl text-emerald-700 dark:text-emerald-400">
          <a href="https://github.com/pehesara112455" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-amber-500 transition"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/uditha-pehesara-7786b4381/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover:text-amber-500 transition"></i>
          </a>
          <a href="mailto:upehesara827@gmail.com">
            <i className="fas fa-envelope hover:text-amber-500 transition"></i>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;