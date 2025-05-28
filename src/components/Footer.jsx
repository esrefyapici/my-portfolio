import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-bg-third text-txt-third py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-semibold">© 2025 Esref Yapici</h1>
          <p className="text-sm">All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/esrefyapici"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/yapiciesref"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:yapiciesref@gmail.com"
            className="hover:text-gray-200 transition-colors"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
