import React from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="mt-45 mx-6 sm:mx-20" id="projects">
      <h1 className="text-4xl font-bold mb-8">PROJECTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-txt-third shadow-md rounded-lg p-5 flex flex-col justify-between h-60">
          <h2 className="text-xl font-semibold mb-4 text-bg-first">
            Role-Based Task App
          </h2>
          <p className="text-gray-600 flex-grow text-sm">
            This project was designed to build a role-based structure tailored
            to real-world needs, ensure secure data flow with an authentication
            system, and improve my skills in modern frontend/backend
            integration.
          </p>
          <div className="flex justify-end space-x-4 mt-4 text-2xl text-gray-700">
            <a
              href="https://employee-r.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLink className="hover:text-blue-500 cursor-pointer" />
            </a>
            <a
              href="https://github.com/esrefyapici/roleBased-task-app-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-black cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="bg-txt-third shadow-md rounded-lg p-5 flex flex-col justify-between h-60">
          <h2 className="text-xl font-semibold mb-4 text-bg-first">
            E-Commerce
          </h2>
          <p className="text-gray-600 flex-grow text-sm">
            This is a modern, responsive e-commerce website built with React,
            React Router DOM, and Redux Toolkit. It allows users to browse
            products, filter by category, search for items, view product
            details, and manage a shopping cart.
          </p>
          <div className="flex justify-end space-x-4 mt-4 text-2xl text-gray-700">
            <a
              href="https://e-commerce-deploy-0p4z.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLink className="hover:text-blue-500 cursor-pointer" />
            </a>
            <a
              href="https://github.com/esrefyapici/e-commerce-deploy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-black cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="bg-txt-third shadow-md rounded-lg p-5 flex flex-col justify-between h-60">
          <h2 className="text-xl font-semibold mb-4 text-bg-first">
            Project Name
          </h2>
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
