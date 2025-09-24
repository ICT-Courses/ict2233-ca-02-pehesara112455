import React from "react";
import Navbar from "../Components/Navbar";
import ProjectCard from "../Components/Projectcard";

function Projects (){

    return(
        <div className="min-h-[100vh] flex flex-col bg-white">
            <Navbar/>
            <div className="flex flex-col items-center my-9 space-y-2 transition-all duration-1000 ease-out transform">
                <h1 className="text-gray-900 font-bold text-6xl">My projects</h1>
        <p className="text-gray-400 text-2xl">
            A showcase of some of the work I've built using modern web technologies.</p>
            </div>
            <ProjectCard/>
        </div>
    )
}
export default Projects;