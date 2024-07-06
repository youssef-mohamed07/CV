import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaMobile, FaLanguage, FaAndroid, FaGitAlt, FaGithub, FaWordpress, FaMicrosoft, FaFileWord, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiMongodb, SiFirebase, SiDocker, SiJenkins, SiKubernetes, SiJira, SiLinux, SiPostman, SiReduxsaga, SiVisualstudiocode, SiIntellijidea, SiPycharm,  SiEclipseide, SiXcode, SiSublimetext, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint } from 'react-icons/si';
import { GiNetworkBars, GiThink } from 'react-icons/gi';
import { AiOutlineConsoleSql, AiOutlineCloudServer } from 'react-icons/ai';
import { VscDebugAlt, VscTerminalBash } from 'react-icons/vsc';
import { BsTools } from 'react-icons/bs';
import { RiTeamFill, RiLightbulbFlashFill } from 'react-icons/ri';
import { DiGitBranch } from 'react-icons/di';
import { motion, AnimatePresence } from 'framer-motion';

const languageSkills = [
  { icon: <FaJava size="2em" />, name: "Java", classes: "bg-blue-500 dark:bg-blue-700" },
  { icon: <FaPython size="2em" />, name: "Python", classes: "bg-yellow-600 dark:bg-yellow-800" },
  { icon: <FaHtml5 size="2em" />, name: "HTML", classes: "bg-orange-500 dark:bg-orange-700" },
  { icon: <FaCss3Alt size="2em" />, name: "CSS", classes: "bg-blue-500 dark:bg-blue-700" },
  { icon: <FaJs size="2em" />, name: "JavaScript", classes: "bg-yellow-500 dark:bg-yellow-700" },
  { icon: <SiTypescript size="2em" />, name: "TypeScript", classes: "bg-blue-600 dark:bg-blue-800" },
  { icon: <FaNodeJs size="2em" />, name: "Node.js", classes: "bg-green-500 dark:bg-green-700" },
  { icon: <FaReact size="2em" />, name: "React", classes: "bg-blue-400 dark:bg-blue-600" },
  { icon: <FaMobile size="2em" />, name: "React Native", classes: "bg-indigo-500 dark:bg-indigo-700" },
  { icon: <SiRedux size="2em" />, name: "Redux", classes: "bg-purple-500 dark:bg-purple-700" },
  { icon: <SiReduxsaga size="2em" />, name: "Redux-Saga", classes: "bg-purple-600 dark:bg-purple-800" },
  { icon: <FaCss3Alt size="2em" />, name: "Tailwind CSS", classes: "bg-blue-600 dark:bg-blue-800" },
  { icon: <FaCss3Alt size="2em" />, name: "Bootstrap CSS", classes: "bg-purple-600 dark:bg-purple-800" },
];

const personalSkills = [
  { icon: <GiNetworkBars size="2em" />, name: "OOP", classes: "bg-green-500 dark:bg-green-700" },
  { icon: <GiNetworkBars size="2em" />, name: "Data Structures", classes: "bg-yellow-500 dark:bg-yellow-700" },
  { icon: <VscDebugAlt size="2em" />, name: "Problem-Solving", classes: "bg-purple-500 dark:bg-purple-700" },
  { icon: <BsTools size="2em" />, name: "Project Management", classes: "bg-gray-500 dark:bg-gray-700" },
  { icon: <RiTeamFill size="2em" />, name: "Strong Communication", classes: "bg-blue-500 dark:bg-blue-700" },
  { icon: <FaLanguage size="2em" />, name: "English", classes: "bg-yellow-500 dark:bg-yellow-700" },
  { icon: <GiThink size="2em" />, name: "Critical Thinking", classes: "bg-blue-600 dark:bg-blue-800" },
  { icon: <RiLightbulbFlashFill size="2em" />, name: "Innovation", classes: "bg-yellow-500 dark:bg-yellow-700" },
  { icon: <SiLinux size="2em" />, name: "Linux", classes: "bg-gray-600 dark:bg-gray-400" },
  { icon: <SiPostman size="2em" />, name: "Postman", classes: "bg-orange-500 dark:bg-orange-700" },
  { icon: <AiOutlineCloudServer size="2em" />, name: "Cloud Computing", classes: "bg-blue-400 dark:bg-blue-600" },
];

const ideSkills = [
  { icon: <SiVisualstudiocode size="2em" />, name: "VS Code", classes: "bg-blue-500 dark:bg-blue-700" },
  { icon: <SiIntellijidea size="2em" />, name: "IntelliJ IDEA", classes: "bg-red-500 dark:bg-red-700" },
  { icon: <SiPycharm size="2em" />, name: "PyCharm", classes: "bg-green-500 dark:bg-green-700" },
  { icon: <FaAndroid size="2em" />, name: "Android Studio", classes: "bg-green-600 dark:bg-green-800" },
  { icon: <SiEclipseide size="2em" />, name: "Eclipse", classes: "bg-purple-500 dark:bg-purple-700" },
  { icon: <SiXcode size="2em" />, name: "Xcode", classes: "bg-blue-400 dark:bg-blue-600" },
  { icon: <SiSublimetext size="2em" />, name: "Sublime Text", classes: "bg-orange-500 dark:bg-orange-700" },
];

const toolsAndSoftwareSkills = [
  { icon: <SiMicrosoftword size="2em" />, name: "Microsoft Word", classes: "bg-blue-600 dark:bg-blue-800" },
  { icon: <SiMicrosoftexcel size="2em" />, name: "Microsoft Excel", classes: "bg-green-600 dark:bg-green-800" },
  { icon: <SiMicrosoftpowerpoint size="2em" />, name: "Microsoft PowerPoint", classes: "bg-red-600 dark:bg-red-800" },
  { icon: <FaGitAlt size="2em" />, name: "Git", classes: "bg-orange-500 dark:bg-orange-700" },
  { icon: <DiGitBranch size="2em" />, name: "Git Bash", classes: "bg-gray-700 dark:bg-gray-500" },
  { icon: <SiPostman size="2em" />, name: "Postman", classes: "bg-orange-500 dark:bg-orange-700" },
  { icon: <BsTools size="2em" />, name: "Edraw Max", classes: "bg-purple-500 dark:bg-purple-700" },
];

const ToggleSwitch = ({ skillType, onToggle }) => (
  <div className="flex flex-wrap items-center justify-center mb-8">
    {['language', 'personal', 'ide', 'tools'].map((type) => (
      <motion.button 
        key={type}
        className={`px-6 py-3 m-2 rounded-full text-lg font-semibold transition-all duration-300 ${
          skillType === type 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        onClick={() => onToggle(type)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)} Skills
      </motion.button>
    ))}
  </div>
);

const Skills = () => {
  const [skillType, setSkillType] = useState('language');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSkills = (type) => {
    setIsVisible(false);
    setTimeout(() => {
      setSkillType(type);
      setIsVisible(true);
    }, 300);
  };

  const currentSkills = 
    skillType === 'language' ? languageSkills :
    skillType === 'personal' ? personalSkills :
    skillType === 'ide' ? ideSkills :
    toolsAndSoftwareSkills;

  return (
    <section className="my-16 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skillset
      </motion.h2>
      <ToggleSwitch skillType={skillType} onToggle={toggleSkills} />
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentSkills.map((skill, index) => (
              <SkillItem key={index} icon={skill.icon} name={skill.name} classes={skill.classes} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SkillItem = ({ icon, name, classes }) => (
  <motion.div 
    className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${classes} text-white`}
    whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div 
      className="text-4xl mb-3"
      initial={{ rotateY: 0 }}
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.4 }}
    >
      {icon && icon}
    </motion.div>
    <span className="text-lg font-semibold text-center">{name}</span>
  </motion.div>
);

export default Skills;