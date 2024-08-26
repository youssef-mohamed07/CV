import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaMobileAlt, FaUsers, FaSearchPlus, FaLanguage, FaGithub, FaLinkedin, FaTwitter, FaBrain, FaRocket, FaProjectDiagram, FaServer, FaDatabase } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const SkillBadge = ({ icon: Icon, text, color }) => (
  <motion.div
    className={`flex flex-col items-center justify-center w-full h-36 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative group cursor-pointer`}
    whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
    whileTap={{ scale: 0.95 }}
    data-tooltip-id={`tooltip-${text}`}
    data-tooltip-content={`My ${text} skills`}
  >
    <div className={`absolute inset-0 ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
    <Icon className={`text-5xl mb-3 ${color.replace('bg-', 'text-')}`} />
    <span className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">{text}</span>
    <Tooltip id={`tooltip-${text}`} />
  </motion.div>
);

const SocialIcon = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-blue-100 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: 360 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="text-3xl" />
  </motion.a>
);

const Profile = () => {
  const skills = [
    { icon: FaCode, text: "Software Engineering", color: "bg-blue-500" },
    { icon: FaDesktop, text: "Web Development", color: "bg-green-500" },
    { icon: FaMobileAlt, text: "Mobile Apps", color: "bg-yellow-500" },
    { icon: FaUsers, text: "Team Collaboration", color: "bg-purple-500" },
    { icon: FaSearchPlus, text: "Problem Solving", color: "bg-red-500" },
    { icon: FaLanguage, text: "Multilingual", color: "bg-indigo-500" },
    { icon: FaBrain, text: "Machine Learning", color: "bg-pink-500" },
    { icon: FaRocket, text: "Agile Methodologies", color: "bg-teal-500" },
   
    { icon: FaDatabase, text: "Database Management", color: "bg-lime-500" },
  ];

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <motion.h2
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Profile
      </motion.h2>

      <motion.div
        className="max-w-7xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <motion.div
            className="col-span-1 bg-gradient-to-br from-blue-600 to-purple-700 p-10 flex flex-col justify-between relative overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0"></div>
            <div className="relative z-10">
              <motion.div
                className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5, boxShadow: "0 0 25px rgba(255,255,255,0.5)" }}
              >
                <img src="img1.jpg" alt="Youssef Mohamed" className="w-full h-full object-cover" />
              </motion.div>
              <motion.h2
                className="text-5xl font-bold text-center text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Youssef Mohamed
              </motion.h2>
              <motion.p
                className="text-center text-blue-100 text-2xl mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Software Engineer
              </motion.p>
            </div>
            <div className="flex justify-center space-x-6">
              <SocialIcon Icon={FaGithub} href="https://github.com/youssef-mohamed07" label="GitHub Profile" />
              <SocialIcon Icon={FaLinkedin} href="https://www.linkedin.com/in/youssef-mohamed-96158330a" label="LinkedIn Profile" />
              <SocialIcon Icon={FaTwitter} href="https://twitter.com/Youssef37025476" label="Twitter Profile" />
            </div>
          </motion.div>

          <motion.div
            className="col-span-1 lg:col-span-2 p-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.h3
              className="text-4xl font-bold mb-6 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              About Me
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              As a passionate and innovative software engineer with a year of hands-on experience, I thrive on creating efficient and cutting-edge solutions. My expertise spans across web development, mobile application creation, and emerging technologies like machine learning. I pride myself on my ability to blend creative problem-solving with meticulous attention to detail, making me a valuable asset to any development team. 
              
              With a strong foundation in multiple programming languages and a commitment to staying at the forefront of technology trends, I am dedicated to delivering high-quality, user-centric software solutions that push the boundaries of what's possible in the digital realm.
            </motion.p>
            <motion.h3
              className="text-4xl font-bold mb-6 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Skills
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map(({ icon, text, color }, index) => (
                <SkillBadge key={index} icon={icon} text={text} color={color} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;