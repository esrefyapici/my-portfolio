import React from 'react';

function AddInfo() {
  const languages = [
    { name: "English", level: "Upper-Intermediate" },
    { name: "Turkish", level: "Native" },
  ];

  const certifications = [
    "YTU SEM Frontend Development Course",
    "PTE Academic (51/90)",
  ];

  const hobbies = [
    "Coding and developing projects",
    "Playing chess",
    "Photography",
    "Playing PC games",
  ];

  const renderList = (title, items, isLanguage = false) => (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-txt-third p-4 rounded-lg shadow-md border border-gray-200"
          >
            {isLanguage ? (
              <>
                <h3 className="text-lg font-medium text-bg-second">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.level}</p>
              </>
            ) : (
              <p className="text-gray-700">{item}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-16 mx-6 sm:mx-20" id='additional'>
      <h1 className="text-4xl font-bold mb-8">ADDITIONAL INFORMATION</h1>
      {renderList("Languages", languages, true)}
      {renderList("Certifications", certifications)}
      {renderList("Hobbies", hobbies)}
    </div>
  );
}

export default AddInfo;
