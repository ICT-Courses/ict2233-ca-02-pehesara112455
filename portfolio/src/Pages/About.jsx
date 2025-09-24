import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';

function About() {
  const [animatePage, setAnimatePage] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Page-load animation
    const timer = setTimeout(() => setAnimatePage(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll-triggered animation for skills
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
  }, []);

  const technicalSkills = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React.js & Hooks", level: 75 },
    { name: "Bootstrap & Tailwind CSS", level: 90 },
    { name: "Git & GitHub", level: 80 },
  ];

  const softSkills = [
    { name: "Team Collaboration", level: 95 },
    { name: "Problem-Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Adaptability", level: 90 },
  ];

  const renderSkill = (skill, index) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-emerald-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animateSkills ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 150}ms`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[100vh] flex flex-col bg-white">
      <Navbar />

      {/* About Me Heading */}
      <div
        className={`flex flex-col items-center my-9 space-y-2 transition-all duration-1000 ease-out transform ${
          animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-gray-900 font-bold text-6xl">About Me</h1>
        <p className="text-gray-400 text-2xl">
          A brief introduction to my professional journey and skills.
        </p>
      </div>

      {/* About Me Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-white">
        <div
          className={`flex-shrink-0 transition-all duration-1000 ease-out transform ${
            animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="../assets/IMG_5599[1].JPG"
            alt="Profile"
            className="w-72 h-72 rounded-full border-4 border-emerald-900 object-cover shadow-lg"
          />
        </div>

        <div
          className={`max-w-2xl text-center md:text-left transition-all duration-1000 ease-out transform ${
            animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-6">
            Hi, I'm Uditha Pehesara
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            I'm a passionate web developer specializing in creating modern and responsive web applications. With a strong foundation in{" "}
            <span className="font-semibold text-emerald-600">React.js</span> and{" "}
            <span className="font-semibold text-emerald-600">JavaScript fundamentals</span>, I enjoy building user-friendly and efficient interfaces.
            <br /><br />
            I am currently a student at{" "}
            <span className="italic text-gray-500">[Your University/College]</span> studying web application development. My goal is to create impactful and elegant digital solutions that solve real-world problems.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-t border-gray-300" />

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className={`bg-white py-16 px-6 md:px-20 transition-all duration-1000 ease-out transform ${
          animateSkills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-6xl text-gray-900 font-bold text-center mb-4">My Skills</h2>
        <p className="text-center text-gray-500 mb-10">
          A look at my technical and soft skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => renderSkill(skill, index))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Soft Skills</h3>
            {softSkills.map((skill, index) => renderSkill(skill, index))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default About;