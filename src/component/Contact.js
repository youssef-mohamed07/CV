import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section className="my-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">
        Contact Me
      </h2>
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      
      <form className="space-y-6">
        <motion.div
          whileFocus={{ scale: 1.05 }}
          whileBlur={{ scale: 1 }}
          className="flex flex-col"
        >
          <label htmlFor="name" className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </motion.div>
        <motion.div
          whileFocus={{ scale: 1.05 }}
          whileBlur={{ scale: 1 }}
          className="flex flex-col"
        >
          <label htmlFor="email" className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </motion.div>
        <motion.div
          whileFocus={{ scale: 1.05 }}
          whileBlur={{ scale: 1 }}
          className="flex flex-col"
        >
          <label htmlFor="message" className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
            required
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:shadow-lg focus:outline-none dark:from-blue-400 dark:to-purple-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </form>
    </div>
  </section>
);

export default Contact;
