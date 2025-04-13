import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [greeting, setGreeting] = useState('');
  const fullText = 'Software Engineer | React Developer | Creative Coder';
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

    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const iconVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.15, y: -3, transition: { type: 'spring', stiffness: 400 } },
    tap: { scale: 0.9 }
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/youssef-mohamed-96158330a", color: "#0077B5", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/youssef-mohamed07", color: "#333", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/Youssef37025476", color: "#1DA1F2", label: "Twitter" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100015806417176&sk=about", color: "#1877F2", label: "Facebook" },
    { icon: FaWhatsapp, href: "https://wa.me/201120592366", color: "#25D366", label: "WhatsApp" }
  ];

  return (
    <header className={`relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800'}`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-20"></div>
          <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-white opacity-15"></div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full bg-white opacity-10"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            className="text-center md:text-left mb-8 md:mb-0 max-w-2xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 dark:from-blue-200 dark:to-purple-200"
              style={{
                textShadow: darkMode ? '0 2px 10px rgba(101, 157, 255, 0.3)' : '0 2px 10px rgba(255, 255, 255, 0.3)',
              }}
            >
              Youssef Mohamed
            </motion.h1>
            
            <motion.div className="relative h-8 md:h-10 mb-4 overflow-hidden">
              <motion.p 
                className="text-lg md:text-2xl font-medium text-blue-100 dark:text-blue-200 absolute left-0 w-full text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {typedText}
                <motion.span 
                  className="inline-block w-0.5 h-6 ml-1 bg-blue-200 dark:bg-blue-300"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                ></motion.span>
              </motion.p>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-white dark:text-gray-200 font-medium opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {greeting}, Welcome to My CV!
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center"
          >
            <motion.div 
              className="grid grid-flow-col gap-4 md:gap-5"
              variants={{ 
                hidden: { opacity: 0 }, 
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onMouseEnter={() => setHoverIcon(index)}
                  onMouseLeave={() => setHoverIcon(null)}
                >
                  {React.createElement(link.icon, { className: "text-white text-xl md:text-2xl" })}
                  <AnimatePresence>
                    {hoverIcon === index && (
                      <motion.span
                        className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-2 py-1 rounded text-sm whitespace-nowrap font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
              
              <motion.button
                onClick={toggleDarkMode}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div 
                      key="sun" 
                      initial={{ rotate: -90, opacity: 0 }} 
                      animate={{ rotate: 0, opacity: 1 }} 
                      exit={{ rotate: 90, opacity: 0 }} 
                      transition={{ duration: 0.3 }}
                    >
                      <FaSun className="text-white text-xl md:text-2xl" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="moon" 
                      initial={{ rotate: 90, opacity: 0 }} 
                      animate={{ rotate: 0, opacity: 1 }} 
                      exit={{ rotate: -90, opacity: 0 }} 
                      transition={{ duration: 0.3 }}
                    >
                      <FaMoon className="text-white text-xl md:text-2xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
