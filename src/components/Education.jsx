import React from "react";

function Education() {
  const educationData = [
    {
      school: "Yıldız Technical University",
      department: "Remote Sensing and GIS",
      date: "2024 - Present",
    },
    {
      school: "Yıldız Technical University",
      department: "Geomatic Engineering",
      gpa: "GPA: 2.75",
      date: "2017 - 2024",
    },
  ];

  return (
    <div className="my-16 mx-6 sm:mx-20" id="education">
      <h1 className="text-4xl font-bold mb-8">EDUCATION</h1>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-txt-third p-6 rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-bg-third">
              {edu.school}
            </h2>
            <h3 className="text-lg text-gray-600 mt-1">{edu.department}</h3>
            {edu.gpa && <p className="text-sm text-gray-500 mt-1">{edu.gpa}</p>}
            <p className="text-sm text-gray-500 mt-2 italic">{edu.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
