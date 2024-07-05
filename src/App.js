import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import Header from './component/Header';
import Profile from './component/Profile';
import Experience from './component/Experience';
import Education from './component/Education';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    document.title = "CV"; // Set the document title here
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="container mx-auto p-8">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.3 } }
          }}>
            <Profile />
            <Experience />
            <Education />
            <Skills />
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
