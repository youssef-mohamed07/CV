import React from 'react';
import { motion } from 'framer-motion';

const Education = () => (
  <section className="my-12 flex justify-center">
    <div className="max-w-4xl w-full">
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">
        Education
      </h2>
      <div className="grid grid-cols-1 gap-8">
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-2">EELU (2022-2026)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Studying Information Technology at the Egyptian E-Learning University
          </p>
          <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-300">
            <p>Grade 3</p>
            <p>GPA: 3.65</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;