import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMicrosoft } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:from-gray-800 dark:to-gray-900 py-6">
    <div className="container mx-auto text-center px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-sm md:text-base">
        © {new Date().getFullYear()} Youssef Mohamed. All rights reserved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex justify-center mt-4 space-x-4">
        <a href="#" className="text-white dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400 mx-2 transition duration-300">
          Privacy Policy
        </a>
        <span className="text-white dark:text-gray-300">•</span>
        <a href="#" className="text-white dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400 mx-2 transition duration-300">
          Terms of Service
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center mt-4 space-x-6">
        <a href="youssefmohamedahmed2004@gmail.com" className="text-white hover:text-blue-200 transition duration-300">
          <FaEnvelope className="inline-block mr-2" />
          Gmail
        </a>
        <a href="2200388@student.eelu.edu.eg" className="text-white hover:text-blue-200 transition duration-300">
          <FaMicrosoft className="inline-block mr-2" />
          Outlook
        </a>
      </motion.div>
    </div>
  </footer>
);

export default Footer;