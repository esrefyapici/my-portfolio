import React from "react";

function Experience() {
  const workExperience = [
    {
      title: "Geomatic Engineer Intern",
      company: "Istanbul Cadastre Directorate - Istanbul, Kartal",
      date: "Sep 2023 - Oct 2023",
    },
    {
      title: "Geomatic Engineer Intern",
      company: "Ark Project Management Engineering Trade LLC.",
      date: "Jul 2023 - Sep 2023",
    },
    {
      title: "Part-Time Archive Assistant",
      company: "Yildiz Technical University",
      date: "Oct 2021 to Dec 2021",
    },
    {
      title: "Supervisor",
      company: "M3 Works Organization - Istanbul, Sisli",
      date: "Mar 2019 to Jul 2019",
    },
  ];

  const internationalExperience = [
    {
      title: "Work and Travel Program",
      company: "Scotty's Lakeside Resort - Lake George, New York, USA",
      date: "Jun 2022 to Sep 2022",
    },
  ];

  const renderExperienceSection = (title, experiences) => (
    <div className="mb-12">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-txt-third p-5 rounded-xl shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-bg-first">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            {exp.date && (
              <p className="text-sm text-gray-500 italic mt-1">{exp.date}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-16 mx-6 sm:mx-20" id="experience">
      <h1 className="text-4xl font-bold mb-8">EXPERIENCE</h1>
      {renderExperienceSection("Work Experience", workExperience)}
      {renderExperienceSection(
        "International Experience",
        internationalExperience
      )}
    </div>
  );
}

export default Experience;
