// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaDatabase,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiExpress, SiRedux } from "react-icons/si";

// const skills = [
//   { name: "React", icon: <FaReact className="text-sky-400" /> },
//   { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//   { name: "Database", icon: <FaDatabase className="text-pink-400" /> },
//   { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
//   { name: "GitHub", icon: <FaGithub className="text-white" /> },
//   { name: "Docker", icon: <FaDocker className="text-white" /> },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 40, scale: 0.8 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 80, damping: 10 },
//   },
// };

// const Skills = () => {
//   return (
//     <div className="relative py-24 px-8 bg-black text-white overflow-hidden">
//       {/* Decorative Gradient Blob */}
//       <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

//       <motion.div
//         className="relative z-10 max-w-6xl mx-auto text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
//           My Skills
//         </h2>
//         <p className="text-gray-300 text-lg mb-14">
//           A mix of technologies I work with daily, crafted with love ❤️ and
//           constant learning 🚀
//         </p>

//         {/* Skills Grid */}
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300"
//               variants={item}
//               whileHover={{ y: -8 }}
//             >
//               <div className="text-5xl mb-4 animate-bounce">{skill.icon}</div>
//               <p className="text-lg font-medium">{skill.name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Skills;


















import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiMysql,
  SiCisco,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  { name: "Database", icon: <FaDatabase className="text-pink-400" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },

  // New Additions 🚀
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Cisco Packet Tracer", icon: <SiCisco className="text-blue-400" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 10 },
  },
};

const Skills = () => {
  return (
    <div className="relative py-24 px-8 bg-black text-white overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-gray-300 text-lg mb-14">
          A mix of technologies I work with daily, crafted with love ❤️ and
          constant learning 🚀
        </p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300"
              variants={item}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-4 animate-bounce">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
