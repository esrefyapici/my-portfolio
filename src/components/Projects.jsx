import React from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="mt-45 mx-6 sm:mx-20" id="projects">
      <h1 className="text-4xl font-bold mb-8">PROJECTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-txt-third shadow-md rounded-lg p-5 flex flex-col justify-between h-60">
          <h2 className="text-xl font-semibold mb-4 text-bg-first">Project Name</h2>
          <p className="text-gray-600 flex-grow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            vero.
          </p>
          <div className="flex justify-end space-x-4 mt-4 text-2xl text-gray-700">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <CiLink className="hover:text-blue-500 cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="bg-txt-third shadow-md rounded-lg p-5 flex flex-col justify-between h-60">
          <h2 className="text-xl font-semibold mb-4 text-bg-first">Project Name</h2>
          <p className="text-gray-600 flex-grow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            vero.
          </p>
          <div className="flex justify-end space-x-4 mt-4 text-2xl text-gray-700">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <CiLink className="hover:text-blue-500 cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="bg-txt-third shadow-md rounded-lg p-5 flex flex-col justify-between h-60">
          <h2 className="text-xl font-semibold mb-4 text-bg-first">Project Name</h2>
          <p className="text-gray-600 flex-grow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            vero.
          </p>
          <div className="flex justify-end space-x-4 mt-4 text-2xl text-gray-700">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <CiLink className="hover:text-blue-500 cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

