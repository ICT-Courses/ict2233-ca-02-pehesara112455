import React from "react";


function ProjectCard({ title, description, image, tech, link }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-emerald-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Tailwind CSS.",
      image: "/assets/portfolio-preview.jpg",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://yourportfolio.com",
    },
    {
      title: "Weather App",
      description: "A real-time weather app using OpenWeather API and styled with Bootstrap.",
      image: "/assets/weather-app.jpg",
      tech: ["JavaScript", "Bootstrap", "API"],
      link: "https://yourweatherapp.com",
    },
    {
      title: "Task Manager",
      description: "A full-stack task manager with user authentication and CRUD operations.",
      image: "/assets/task-manager.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://yourtaskmanager.com",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;