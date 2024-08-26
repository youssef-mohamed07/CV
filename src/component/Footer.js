import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMicrosoft, FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/youssef-mohamed07" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/youssef-mohamed-96158330a" },
    { icon: FaTwitter, href: "https://twitter.com/Youssef37025476" },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Youssef Mohamed</h3>
            <p className="mb-2">Software Engineer | React Developer</p>
            <p>Passionate about creating amazing web experiences</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#Profile" className="hover:text-purple-300 transition-colors duration-300">Profile</a></li>
              <li><a href="#Experience" className="hover:text-purple-300 transition-colors duration-300">Experience</a></li>
              <li><a href="#Education" className="hover:text-purple-300 transition-colors duration-300">Education</a></li>
              <li><a href="#Skills" className="hover:text-purple-300 transition-colors duration-300">Skills</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex justify-center md:justify-end flex-wrap gap-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-purple-300 transition-colors duration-300"
                >
                  <link.icon size="1.5em" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2">
              <a href="mailto:youssefmohamedahmed2004@gmail.com" className="flex items-center justify-center md:justify-end hover:text-purple-300 transition-colors duration-300">
                <FaEnvelope className="mr-2" /> youssefmohamedahmed2004@gmail.com
              </a>
              <a href="mailto:2200388@student.eelu.edu.eg" className="flex items-center justify-center md:justify-end hover:text-purple-300 transition-colors duration-300">
                <FaMicrosoft className="mr-2" /> 2200388@student.eelu.edu.eg
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="mt-8 pt-8 border-t border-purple-700 text-center"
        >
          <p className="text-sm">
            © {currentYear} Youssef Mohamed. All rights reserved.
          </p>
          <motion.p 
            className="mt-2 text-sm flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with <FaHeart className="mx-1 text-red-500 animate-pulse" /> using React and Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
