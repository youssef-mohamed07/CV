import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaDesktop, FaGlobe, FaMobileAlt ,FaJava} from 'react-icons/fa';
import { SiJava, SiJavafx, SiNextdotjs, SiTailwindcss, SiReact } from 'react-icons/si'; // Corrected import

const ExperienceItem = ({ icon, title, subtitle, description, skills, link }) => (
  <motion.div
    className="p-6 bg-gradient-to-br from-blue-500 to-purple-600  dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
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
    </div>
    <p className="text-xl text-yellow-100 mb-4">{subtitle}</p>
    <ul className="list-disc list-inside text-lg leading-relaxed text-white mb-6">
      {description.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-3">
      {skills.map((Skill, index) => (
        <Skill key={index} className="text-2xl text-yellow-300" />
      ))}
    </div>
  </motion.div>
);

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
      skills: [FaJava],
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
      skills: [SiNextdotjs, SiTailwindcss],
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
      skills: [SiReact],
    },
  ];

  return (
    <section className="my-16 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Journey
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 gap-10 max-w-4xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;