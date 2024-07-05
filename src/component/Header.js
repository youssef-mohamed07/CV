import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = ({ toggleDarkMode, darkMode }) => (
  <header className={`bg-gradient-to-r ${darkMode ? 'from-gray-800 to-gray-900' : 'from-blue-500 to-purple-600'} text-white py-8 shadow-lg`}>
    <div className="container mx-auto flex justify-between items-center">
      <motion.div initial={{ y: -250 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        <h1 className="text-5xl font-bold">Youssef Mohamed</h1>
        <p className="text-2xl">Software Engineer</p>
      </motion.div>
      <motion.div className="flex space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <a href="https://www.linkedin.com/in/youssef-mohamed-96158330a" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          <FaLinkedin size="2em" />
        </a>
        <a href="https://github.com/youssef-mohamed07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          <FaGithub size="2em" />
        </a>
        <a href="https://twitter.com/Youssef37025476" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          <FaTwitter size="2em" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100015806417176&sk=about" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          <FaFacebook size="2em" />
        </a>
        <a href="https://www.instagram.com/youssef_mohamed7100?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          <FaInstagram size="2em" />
        </a>
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? <FaSun size="2em" /> : <FaMoon size="2em" />}
        </button>
      </motion.div>
    </div>
  </header>
);

export default Header;
