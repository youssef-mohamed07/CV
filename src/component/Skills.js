import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaMobile, FaLanguage } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiMongodb, SiFirebase, SiDocker, SiJenkins, SiKubernetes, SiGithub, SiJira, SiLinux, SiPostman, SiReduxsaga } from 'react-icons/si';
import { GiNetworkBars, GiThink } from 'react-icons/gi';
import { AiOutlineConsoleSql, AiOutlineCloudServer } from 'react-icons/ai';
import { VscDebugAlt, VscTerminalBash } from 'react-icons/vsc';
import { BsTools } from 'react-icons/bs';
import { RiTeamFill, RiLightbulbFlashFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Skills = () => (
  <section className="my-12">
    <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <SkillItem icon={<FaJava size="2em" />} name="Java" classes="bg-blue-500 text-white" />
      <SkillItem icon={<GiNetworkBars size="2em" />} name="OOP" classes="bg-green-500 text-white" />
      <SkillItem icon={<GiNetworkBars size="2em" />} name="Data Structures" classes="bg-yellow-500 text-white" />
      <SkillItem icon={<FaReact size="2em" />} name="React" classes="bg-blue-400 text-white" />
      <SkillItem icon={<SiRedux size="2em" />} name="Redux" classes="bg-purple-500 text-white" />
      <SkillItem icon={<FaMobile size="2em" />} name="React Native" classes="bg-indigo-500 text-white" />
      <SkillItem icon={<FaPython size="2em" />} name="Python" classes="bg-yellow-600 text-white" />
      <SkillItem icon={<AiOutlineConsoleSql size="2em" />} name="SQL" classes="bg-red-500 text-white" />
      <SkillItem icon={<SiMongodb size="2em" />} name="MongoDB" classes="bg-green-600 text-white" />
      <SkillItem icon={<SiTypescript size="2em" />} name="TypeScript" classes="bg-blue-600 text-white" />
      <SkillItem icon={<FaHtml5 size="2em" />} name="HTML" classes="bg-orange-500 text-white" />
      <SkillItem icon={<FaCss3Alt size="2em" />} name="CSS" classes="bg-blue-500 text-white" />
      <SkillItem icon={<FaJs size="2em" />} name="JavaScript" classes="bg-yellow-500 text-white" />
      <SkillItem icon={<FaNodeJs size="2em" />} name="Node.js" classes="bg-green-500 text-white" />
      <SkillItem icon={<VscDebugAlt size="2em" />} name="Problem-Solving" classes="bg-purple-500 text-white" />
      <SkillItem icon={<BsTools size="2em" />} name="Project Management Tools" classes="bg-gray-500 text-white" />
      <SkillItem icon={<RiTeamFill size="2em" />} name="Strong Communication" classes="bg-blue-500 text-white" />
      <SkillItem icon={<FaLanguage size="2em" />} name="English" classes="bg-yellow-500 text-white" />
      <SkillItem icon={<SiGithub size="2em" />} name="Git & GitHub" classes="bg-black text-white" />
      <SkillItem icon={<SiLinux size="2em" />} name="Linux" classes="bg-gray-600 text-white" />
      <SkillItem icon={<SiPostman size="2em" />} name="Postman" classes="bg-orange-500 text-white" />
      <SkillItem icon={<SiFirebase size="2em" />} name="Firebase" classes="bg-yellow-600 text-white" />
      <SkillItem icon={<AiOutlineCloudServer size="2em" />} name="Cloud Computing" classes="bg-blue-400 text-white" />
      <SkillItem icon={<SiReduxsaga size="2em" />} name="Redux-Saga" classes="bg-purple-600 text-white" />
      <SkillItem icon={<GiThink size="2em" />} name="Critical Thinking" classes="bg-blue-600 text-white" />
      <SkillItem icon={<RiLightbulbFlashFill size="2em" />} name="Innovation" classes="bg-yellow-500 text-white" />
      <SkillItem icon={<FaCss3Alt size="2em" />} name="Tailwind CSS" classes="bg-blue-600 text-white" />
      <SkillItem icon={<FaCss3Alt size="2em" />} name="Bootstrap CSS" classes="bg-purple-600 text-white" />
    </div>
  </section>
);

const SkillItem = ({ icon, name, classes }) => (
  <motion.div className={`flex items-center p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer ${classes}`} whileHover={{ scale: 1.05 }}>
    {icon && icon}
    <span className="text-lg ml-2">{name}</span>
  </motion.div>
);

export default Skills;
