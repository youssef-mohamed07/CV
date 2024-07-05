import React from 'react';

const Profile = () => (
  <section className="my-12">
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">
        Profile
      </h2>
      <div className="flex justify-center items-center">
        <div className="relative group">
          <img src="img1.jpg" alt="Profile" className="w-32 h-32 rounded-full shadow-lg border-4 border-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        </div>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 my-6 mx-8 leading-relaxed">
        I am a student and professional web developer with one year of experience in database administration and website design. I possess strong creative and analytical skills and am described as a team player with an eye for detail. Additionally, I have experience in mobile application development and am proficient in English.
      </p>
    </div>
  </section>
);

export default Profile;
