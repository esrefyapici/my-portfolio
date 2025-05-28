import React from "react";
import {
  FaHtml5,
  FaSass,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiCss3,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 />, level: "8 / 10" },
    { name: "CSS", icon: <SiCss3 />, level: "8 / 10" },
    { name: "SASS/SCSS", icon: <FaSass />, level: "2 / 10" },
    { name: "TailwindCSS", icon: <RiTailwindCssFill />, level: "5 / 10" },
    { name: "JavaScript", icon: <IoLogoJavascript />, level: "7 / 10" },
    { name: "TypeScript", icon: <SiTypescript />, level: "2 / 10" },
    { name: "React", icon: <FaReact />, level: "7 / 10" },
    { name: "Next.js", icon: <RiNextjsFill />, level: "2 / 10" },
    { name: "Angular", icon: <FaAngular />, level: "2 / 10" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, level: "4 / 10" },
    { name: "Express.js", icon: <SiExpress />, level: "5 / 10" },
    { name: "Nest.js", icon: <SiNestjs />, level: "2 / 10" },
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: <SiMongodb />, level: "4 / 10" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "2 / 10" },
  ];
  const versionControlSkills = [
    { name: "Git", icon: <FaGitAlt />, level: "4 / 10" },
    { name: "GitHub", icon: <FaGithub />, level: "4 / 10" },
  ];

  const renderSkills = (title, skills) => (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-txt-third rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl text-bg-first">{skill.icon}</span>
              <span className="text-lg font-medium text-bg-third">
                {skill.name}
              </span>
            </div>
            <span className="text-sm text-gray-500">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-16 mx-6 sm:mx-20" id="skills">
      <h1 className="text-4xl font-bold mb-8">SKILLS</h1>
      {renderSkills("Front-End", frontendSkills)}
      {renderSkills("Back-End", backendSkills)}
      {renderSkills("Databases", databaseSkills)}
      {renderSkills("Version Control Systems", versionControlSkills)}
    </div>
  );
}

export default Skills;
