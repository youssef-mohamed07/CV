import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
    setIsSubmitting(false);
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)" },
    blur: { scale: 1, boxShadow: "none" }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400"
        >
          Get in Touch
        </motion.h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">Let's Chat!</h3>
              <p className="mb-6">I'm always excited to connect, collaborate, and discuss new opportunities.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaEnvelope className="mr-3" /> youssefmohamedahmed2004@gmail.com
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3" /> 2200388@student.eelu.edu.eg
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-8">
              <AnimatePresence>
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" whileHover="focus" className="relative">
                      <FaUser className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-transparent outline-none text-gray-800 dark:text-gray-200 transition-colors duration-300"
                        placeholder="Your Name"
                        required
                      />
                    </motion.div>
                    <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" whileHover="focus" className="relative">
                      <FaEnvelope className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-transparent outline-none text-gray-800 dark:text-gray-200 transition-colors duration-300"
                        placeholder="Your Email"
                        required
                      />
                    </motion.div>
                    <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" whileHover="focus" className="relative">
                      <FaCommentAlt className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-transparent outline-none resize-none text-gray-800 dark:text-gray-200 transition-colors duration-300"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </motion.div>
                    <motion.button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white rounded-full hover:shadow-lg focus:outline-none flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <FaPaperPlane className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <FaPaperPlane className="text-6xl text-green-500 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;