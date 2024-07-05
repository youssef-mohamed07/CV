import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => (
  <section className="my-12">
    <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">
      Experience
    </h2>
    <div className="space-y-8">
      <motion.div
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Java Desktop Application (2023)</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Developed a Contacts Application</p>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Focused on database administration and website design.</li>
          <li>Built logic for a streamlined ad-serving platform.</li>
          <li>Worked on educational institutions and online classroom management.</li>
          <li>Skills used: Java, JavaFX.</li>
        </ul>
      </motion.div>
      <motion.div
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          <a href="https://blockhaven.net" target="_blank" rel="noopener noreferrer" className="text-white-600 dark:text-white">
            Web Design (Click To Watch)
          </a>
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Muscle Generator Website</p>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>
            BlockHaven is a comprehensive fitness platform designed to simplify your fitness journey. It offers a range of workout plans, including strength training, cardio, yoga, and flexibility training.
          </li>
          <li>
            Nutrition guidance covers healthy eating, meal planning, supplements, and hydration.
          </li>
          <li>
            The community section includes a fitness forum and various events and challenges to keep you engaged and motivated.
          </li>
          <li>
            BlockHaven provides an easy-to-use service for anyone looking to improve their fitness and overall health.
          </li>
          <li>Skills used: Next.js, Tailwind CSS.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Experience;
