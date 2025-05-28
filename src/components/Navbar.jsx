import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  const [links, setLinks] = useState(false);

  return (
    <div className="relative">
      <div className="h-20 bg-bg-third flex justify-between items-center px-5">
        <h1 className="font-bold text-2xl">
          <a href="/" className="hover:text-amber-100">
            ESREF.com
          </a>
        </h1>

        <ul className="hidden sm:flex space-x-5">
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#additional" className="hover:underline">
              Additional Info
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        <div className="text-2xl sm:hidden cursor-pointer">
          <GiHamburgerMenu onClick={() => setLinks(!links)} />
        </div>
      </div>

      {links && (
        <div className="sm:hidden w-full bg-bg-first z-10">
          <NavbarLinks />
        </div>
      )}
    </div>
  );
}

export default Navbar;
