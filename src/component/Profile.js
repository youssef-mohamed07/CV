import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaDesktop, FaMobileAlt, FaUsers, FaSearchPlus, FaLanguage } from 'react-icons/fa';

const SkillBadge = ({ icon: Icon, text }) => (
  <motion.div 
    className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-md"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="mr-2" />
    <span>{text}</span>
  </motion.div>
);

const Profile = () => {
  const skills = [
    { icon: FaDatabase, text: "Database Admin" },
    { icon: FaDesktop, text: "Web Development" },
    { icon: FaMobileAlt, text: "Mobile Apps" },
    { icon: FaUsers, text: "Team Player" },
    { icon: FaSearchPlus, text: "Detail-Oriented" },
    { icon: FaLanguage, text: "English Proficient" },
  ];

  return (
    <section className="my-16">
      <motion.div 
        className="p-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Profile
        </motion.h2>
        <div className="flex justify-center items-center mb-8">
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="img1.jpg" alt="Profile" className="w-40 h-40 rounded-full shadow-xl border-4 border-white dark:border-gray-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </motion.div>
        </div>
        <motion.p 
          className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I am a passionate student and professional web developer with a year of hands-on experience in database administration and website design. My creative and analytical skills, combined with my keen eye for detail, make me a valuable team player. I've also ventured into mobile application development and am proficient in English.
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <SkillBadge key={index} icon={skill.icon} text={skill.text} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Profile;