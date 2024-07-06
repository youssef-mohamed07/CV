import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Engineer | React Developer ';
  const [hoverIcon, setHoverIcon] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTypedText(fullText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    };
    typeText();
  }, []);

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9 },
  };

  return (
    <header className={`bg-gradient-to-r ${darkMode ? 'from-gray-900 to-black' : 'from-blue-600 to-purple-700'} text-white py-6 shadow-2xl relative overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 relative z-10">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -250, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 10 }}
              className="text-center md:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Youssef Mohamed
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl font-light"
                animate={{
                  textShadow: ['0 0 0px #fff', '0 0 20px #fff', '0 0 0px #fff'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {typedText}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex space-x-6 mt-6 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, staggerChildren: 0.2 }}
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/youssef-mohamed-96158330a", color: "#0077B5" },
            { icon: FaGithub, href: "https://github.com/youssef-mohamed07", color: "#333" },
            { icon: FaTwitter, href: "https://twitter.com/Youssef37025476", color: "#1DA1F2" },
            { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100015806417176&sk=about", color: "#1877F2" },
            { icon: FaInstagram, href: "https://www.instagram.com/youssef_mohamed7100?igsh=YzljYTk1ODg3Zg==", color: "#E1306C" },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors duration-300 relative"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onMouseEnter={() => setHoverIcon(index)}
              onMouseLeave={() => setHoverIcon(null)}
            >
              <Icon size="2em" />
              {hoverIcon === index && (
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {Icon.name.replace('Fa', '')}
                </motion.div>
              )}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ scale: 0, opacity: 0 }}
                animate={hoverIcon === index ? { scale: 1.5, opacity: 0.2 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.button
            onClick={toggleDarkMode}
            className="focus:outline-none hover:text-gray-200 transition-colors duration-300 relative"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <FaSun size="2em" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <FaMoon size="2em" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;