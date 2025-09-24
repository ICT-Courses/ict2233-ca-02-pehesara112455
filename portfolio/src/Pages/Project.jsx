import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ProjectCard from "../Components/Projectcard";
import Footer from "../Components/Footer";
import projectList from "../../public/project.json"; 

function Projects() {
  const [animatePage, setAnimatePage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePage(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navbar />

      {/* Heading Section */}
      <div
        className={`flex flex-col items-center my-9 space-y-2 transition-all duration-1000 ease-out transform ${
          animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-gray-900 dark:text-white font-bold text-6xl">My projects</h1>
        <p className="text-gray-400 dark:text-gray-300 text-2xl">
          A showcase of some of the work I've built using modern web technologies.
        </p>
      </div>

      {/* Project Grid Section */}
      <section
        className={`bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-20 transition-all duration-1000 ease-out transform ${
          animatePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;