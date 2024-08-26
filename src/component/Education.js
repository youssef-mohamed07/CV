import React from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaStar, FaBook } from 'react-icons/fa';

const EducationItem = ({ title, institution, period, description, grade, gpa, courses }) => (
  <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center mb-4">
      <FaGraduationCap className="text-3xl text-yellow-300 mr-4" />
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
    </div>
    <div className="mb-4 flex items-center text-yellow-100">
      <FaUniversity className="mr-2" />
      <p className="text-lg">{institution}</p>
    </div>
    <div className="mb-4 flex items-center text-yellow-100">
      <FaCalendarAlt className="mr-2" />
      <p>{period}</p>
    </div>
    <p className="text-lg leading-relaxed mb-6 text-white">{description}</p>
    <div className="flex justify-between items-center text-sm font-medium text-yellow-100">
      <div className="flex items-center">
        <FaStar className="mr-2 text-yellow-300" />
        <p>Grade: {grade}</p>
      </div>
      <div className="flex items-center">
        <FaStar className="mr-2 text-yellow-300" />
        <p>GPA: {gpa}</p>
      </div>
    </div>
    {courses && (
      <div className="mt-6 text-white">
        <h4 className="text-lg font-bold mb-2">Relevant Courses:</h4>
        <ul className="list-disc pl-5">
          {courses.map((course, index) => (
            <li key={index} className="mb-1 flex items-center">
              <FaBook className="mr-2" />
              {course}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Education = () => {
  const educationData = [
    {
      title: "Information Technology",
      institution: "Egyptian E-Learning University (EELU)",
      period: "2022-2026",
      description: "Pursuing a degree in Information Technology, focusing on cutting-edge technologies and innovative solutions in the digital realm.",
      grade: "3",
      gpa: "3.65",
    },
    // You can add more education items here
  ];

  return (
    <section className="my-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">
        Educational Journey
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-10">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
