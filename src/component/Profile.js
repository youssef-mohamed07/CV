import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaDesktop, FaMobileAlt, FaUsers, FaSearchPlus, FaLanguage, FaGithub, FaLinkedin, FaTwitter, FaBrain, FaRocket, FaDatabase } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const SkillBadge = ({ icon: Icon, text, color, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <motion.div
      custom={index}
      variants={variants}
      className={`flex flex-col items-center justify-center p-5 h-32 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/30 overflow-hidden relative group`}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <Icon className={`text-4xl mb-3 ${color.replace('bg-', 'text-')}`} />
      <span className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">{text}</span>
      <Tooltip id={`tooltip-${text}`} />
    </motion.div>
  );
};

const Profile = () => {
  const profileRef = useRef(null);
  const inView = useInView(profileRef, { once: true, threshold: 0.1 });
  
  const skills = [
    { icon: FaCode, text: "Software Engineering", color: "bg-blue-500" },
    { icon: FaDesktop, text: "Web Development", color: "bg-indigo-500" },
    { icon: FaMobileAlt, text: "Mobile Apps", color: "bg-purple-500" },
    { icon: FaUsers, text: "Team Collaboration", color: "bg-pink-500" },
    { icon: FaSearchPlus, text: "Problem Solving", color: "bg-red-500" },
    { icon: FaLanguage, text: "Multilingual", color: "bg-orange-500" },
    { icon: FaBrain, text: "Machine Learning", color: "bg-amber-500" },
    { icon: FaRocket, text: "Agile Methodologies", color: "bg-teal-500" },
    { icon: FaDatabase, text: "Database Management", color: "bg-green-500" },
  ];
  
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/youssef-mohamed07", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/youssef-mohamed-96158330a", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/Youssef37025476", label: "Twitter" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300" ref={profileRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Profile
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left Column - Personal Info */}
            <div className="relative overflow-hidden">
              {/* Background gradient with subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 z-0">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white bg-opacity-10"></div>
                <div className="absolute left-10 top-10 w-20 h-20 rounded-full bg-white bg-opacity-10"></div>
              </div>

              <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-40 h-40 sm:w-52 sm:h-52 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-lg mb-6"
                  >
                    <img src="img1.jpg" alt="Youssef Mohamed" className="w-full h-full object-cover" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Youssef Mohamed</h2>
                    <p className="text-xl text-blue-100 mb-6">Software Engineer</p>
                  </motion.div>
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex justify-center space-x-4"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      custom={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: (i) => ({
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay: 0.05 * i,
                            duration: 0.3,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                          }
                        })
                      }}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <link.icon className="text-xl" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right Column - About Me & Skills */}
            <div className="col-span-1 lg:col-span-2 p-8 sm:p-10">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
                >
                  About Me
                </motion.h3>
                
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
                >
                  As a passionate and innovative software engineer with a year of hands-on experience, I thrive on creating efficient and cutting-edge solutions. My expertise spans across web development, mobile application creation, and emerging technologies like machine learning. I pride myself on my ability to blend creative problem-solving with meticulous attention to detail, making me a valuable asset to any development team.
                  
                  <span className="block mt-4">With a strong foundation in multiple programming languages and a commitment to staying at the forefront of technology trends, I am dedicated to delivering high-quality, user-centric software solutions that push the boundaries of what's possible in the digital realm.</span>
                </motion.p>
                
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
                >
                  Skills
                </motion.h3>
                
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
                >
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} {...skill} index={index} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
