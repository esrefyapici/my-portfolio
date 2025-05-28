import React from "react";

function NavbarLinks() {
  return (
    <div>
      <ul className="flex flex-col items-center justify-center text-txt-third">
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
    </div>
  );
}

export default NavbarLinks;
