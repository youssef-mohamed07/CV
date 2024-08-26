import React, { useState } from 'react';
import { FaBriefcase, FaDesktop, FaGlobe, FaMobileAlt, FaJava, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SiJava, SiJavafx, SiNextdotjs, SiTailwindcss, SiReact, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

const ExperienceItem = ({ icon, title, subtitle, description, skills, link, companyLogo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          {React.cloneElement(icon, { className: "text-3xl sm:text-4xl text-yellow-300 mr-4" })}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
        </div>
        {companyLogo && <img src={companyLogo} alt="Company Logo" className="mt-2 sm:mt-0 sm:ml-4 h-6 sm:h-8 w-auto" />}
      </div>
      <p className="text-lg sm:text-xl text-yellow-100 mb-4">{subtitle}</p>
      <div className="flex items-center cursor-pointer mb-4" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-base sm:text-lg text-white">Details</p>
        {isOpen ? <FaAngleUp className="ml-2 text-white" /> : <FaAngleDown className="ml-2 text-white" />}
      </div>
      {isOpen && (
        <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-white mb-6">
          {description.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map(({ Skill, label }, index) => (
          <div key={index} className="flex items-center text-white text-sm sm:text-base">
            <Skill className="text-xl sm:text-2xl text-yellow-300 mr-1 sm:mr-2" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    // ... (keep the experiences array as it is)
  ];

  return (
    <section className="my-8 sm:my-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">
        Professional Journey
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:gap-10 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;