import React, { useState } from 'react';
import { FaBriefcase, FaDesktop, FaGlobe, FaMobileAlt, FaJava, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SiJava, SiJavafx, SiNextdotjs, SiTailwindcss, SiReact, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

const ExperienceItem = ({ icon, title, subtitle, description, skills, link, companyLogo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl md:text-3xl font-bold text-white ml-4">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {companyLogo && <img src={companyLogo} alt="Company Logo" className="ml-4 h-8 w-auto" />}
      </div>
      <p className="text-xl text-yellow-100 mb-4">{subtitle}</p>
      <div className="flex items-center cursor-pointer mb-4" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg text-white">Details</p>
        {isOpen ? <FaAngleUp className="ml-2 text-white" /> : <FaAngleDown className="ml-2 text-white" />}
      </div>
      {isOpen && (
        <ul className="list-disc list-inside text-lg leading-relaxed text-white mb-6">
          {description.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-3">
        {skills.map(({ Skill, label }, index) => (
          <div key={index} className="flex items-center text-white">
            <Skill className="text-2xl text-yellow-300 mr-2" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      icon: <FaDesktop className="text-4xl text-yellow-300" />,
      title: "Java Desktop Application (2023)",
      subtitle: "Developed a Contacts Application",
      description: [
        "Focused on database administration and website design.",
        "Built logic for a streamlined ad-serving platform.",
        "Worked on educational institutions and online classroom management.",
      ],
      skills: [{ Skill: FaJava, label: "Java" }],
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-300" />,
      title: "Web Design",
      subtitle: "Muscle Generator Website",
      link: "https://blockhaven.net",
      description: [
        "BlockHaven is a comprehensive fitness platform designed to simplify your fitness journey.",
        "Offers a range of workout plans, including strength training, cardio, yoga, and flexibility training.",
        "Provides nutrition guidance covering healthy eating, meal planning, supplements, and hydration.",
        "Includes a community section with a fitness forum and various events and challenges.",
        "Easy-to-use service for anyone looking to improve their fitness and overall health.",
      ],
      skills: [
        { Skill: SiNextdotjs, label: "Next.js" },
        { Skill: SiTailwindcss, label: "Tailwind CSS" }
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl text-yellow-300" />,
      title: "React Native Mobile App (2023)",
      subtitle: "Developed a Fitness Tracking App",
      description: [
        "Created a cross-platform mobile application for iOS and Android.",
        "Implemented features like workout tracking, nutrition logging, and progress visualization.",
        "Integrated with wearable devices for real-time health data collection.",
        "Implemented user authentication and data synchronization across devices.",
        "Optimized app performance for smooth user experience on various devices.",
      ],
      skills: [{ Skill: SiReact, label: "React Native" }],
    },
    {
      icon: <FaBriefcase className="text-4xl text-yellow-300" />,
      title: "Comprehensive Corporate Site (2023)",
      subtitle: "Developed for a major company in Oman",
      description: [
        "Built a full-featured web application using the MERN stack (MongoDB, Express, React, Node.js).",
        "Implemented various modules including e-commerce, CRM, and HR management.",
        "Ensured high performance and scalability to handle significant traffic.",
        "Created an admin dashboard for managing all company operations.",
        "Integrated multilingual support for both Arabic and English.",
      ],
      skills: [
        { Skill: SiReact, label: "React" },
        { Skill: SiMongodb, label: "MongoDB" },
        { Skill: SiExpress, label: "Express" },
        { Skill: SiNodedotjs, label: "Node.js" }
      ],
    },
  ];

  return (
    <section className="my-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">
        Professional Journey
      </h2>
      <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
