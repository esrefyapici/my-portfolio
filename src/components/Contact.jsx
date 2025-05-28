import React from "react";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

function Contact() {
  const contactInfo = [
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Kartal / İstanbul",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "yapiciesref@gmail.com",
      href: "mailto:yapiciesref@gmail.com",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+90 543 567 18 03",
      href: "tel:+905435671803",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/yapiciesref",
      href: "https://linkedin.com/in/yapiciesref",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "github.com/esrefyapici",
      href: "https://github.com/esrefyapici",
    },
  ];

  return (
    <div className="my-16 mx-6 sm:mx-20" id="contact">
      <h1 className="text-4xl font-bold mb-8">CONTACT</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-txt-third p-5 rounded-lg shadow-md border border-gray-200"
          >
            <div className="text-2xl text-amber-500">{item.icon}</div>
            <div>
              <h2 className="text-sm font-semibold text-gray-600">
                {item.label}
              </h2>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-amber-600 transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-800 text-sm">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
