import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const formRef = useRef(null);
  const inView = useInView(formRef, { once: true, threshold: 0.1 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    let formErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulating API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Uncomment below for actual API integration
      /*
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        setErrors({ ...errors, message: 'Failed to send message. Please try again.' });
      }
      */
      
      // For demo purposes
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error:', error);
      setErrors({ ...errors, message: 'An error occurred. Please try again.' });
    }
    setIsSubmitting(false);
  };

  const contactItems = [
    { 
      icon: FaEnvelope, 
      text: 'youssefmohamedahmed2004@gmail.com',
      label: 'Email'
    },
    { 
      icon: FaEnvelope, 
      text: '2200388@student.eelu.edu.eg',
      label: 'Academic'
    },
    { 
      icon: FaPhoneAlt, 
      text: '+20 112 059 2366',
      label: 'Phone'
    },
    { 
      icon: FaMapMarkerAlt, 
      text: 'Cairo, Egypt',
      label: 'Location'
    }
  ];

  // Subtle animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const inputVariants = {
    rest: { scale: 1, borderColor: "rgba(209, 213, 219, 0.8)" },
    focus: { scale: 1.01, borderColor: "rgba(59, 130, 246, 0.8)" },
    error: { borderColor: "rgba(239, 68, 68, 0.8)" }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto" ref={formRef}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info Side */}
            <motion.div 
              className="p-8 md:p-10 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 text-white relative overflow-hidden"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Background Element */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-white bg-opacity-10 z-0"></div>
              <div className="absolute right-20 top-20 w-20 h-20 rounded-full bg-white bg-opacity-10 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8 opacity-90">
                  Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
                </p>
                
                <motion.ul 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {contactItems.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-white bg-opacity-20 rounded-xl mr-4">
                        <item.icon className="text-lg" />
                      </div>
                      <div>
                        <span className="block text-sm font-medium opacity-80">{item.label}</span>
                        <span className="block font-semibold break-all">{item.text}</span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div 
              className="p-8 md:p-10"
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!isSubmitted ? (
                <motion.form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send a Message</h3>
                  
                  <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                  >
                    <motion.div 
                      variants={itemVariants}
                      className="relative"
                    >
                      <div className="absolute top-3 left-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <FaUser className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variants={inputVariants}
                        initial="rest"
                        whileFocus="focus"
                        animate={errors.name ? "error" : "rest"}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 focus:outline-none transition-colors duration-300 text-gray-800 dark:text-gray-200"
                        placeholder="Your Name"
                        required
                      />
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm mt-1 pl-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      className="relative"
                    >
                      <div className="absolute top-3 left-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <FaEnvelope className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variants={inputVariants}
                        initial="rest"
                        whileFocus="focus"
                        animate={errors.email ? "error" : "rest"}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 focus:outline-none transition-colors duration-300 text-gray-800 dark:text-gray-200"
                        placeholder="Your Email"
                        required
                      />
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm mt-1 pl-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      className="relative"
                    >
                      <div className="absolute top-3 left-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <FaCommentAlt className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        variants={inputVariants}
                        initial="rest"
                        whileFocus="focus"
                        animate={errors.message ? "error" : "rest"}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 focus:outline-none transition-colors duration-300 text-gray-800 dark:text-gray-200 resize-none"
                        placeholder="Your Message"
                        required
                      ></motion.textarea>
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm mt-1 pl-2"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </motion.div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-md focus:outline-none flex items-center justify-center transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Send Message</span>
                        <FaPaperPlane />
                      </div>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  className="h-full flex flex-col items-center justify-center py-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                  >
                    <FaPaperPlane className="text-3xl text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;