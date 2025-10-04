import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example project data (replace with your own)
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and TailwindCSS.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.netlify.app",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Restaurant Website",
    description: "Full-stack restaurant app with cart, payments & admin dashboard.",
    github: "https://github.com/yourusername/restaurant",
    live: "https://restaurantdemo.netlify.app",
    tech: ["MERN", "Redux", "Razorpay"],
  },
  {
    title: "AI Question Generator",
    description: "AI-powered app that generates smart question papers.",
    github: "https://github.com/yourusername/ai-question-gen",
    live: "https://aiquestions.netlify.app",
    tech: ["React", "Node.js", "AI/ML"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const Projects = () => {
  return (
    <div className="relative py-24 px-8 bg-black text-white overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute -top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full blur-[150px] opacity-20 animate-pulse"></div>

      {/* Section Heading */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-300 text-lg mb-16">
          Some of the best works I've crafted with modern technologies 🚀
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/20 text-sm rounded-full text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/30 rounded-lg text-white hover:bg-black/70 transition"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white hover:opacity-90 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
