import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example project data (replace with your own)
const projects = [
  {
    title: "Real Time Chat App",
    description: "Developed a real-time chat application using the MERN stack and Socket.IO for instant messaging. Implemented features like user authentication, active user status. Designed a responsive UI using React.js and Tailwind CSS for a smooth user experience. 	Deployed on Render, enabling live chat functionality accessible via the web",
    github: "https://github.com/neeldhoble/Chat-App.git",
    live: "https://yourportfolio.netlify.app",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Restaurant Website",
    description: "Built a full-stack restaurant web application. Designed an intuitive UI with Tailwind CSS featuring menu filtering, live kitchen tracker and scheduled orders. Developed features like group order mode with smart bill split, AI meal recommender, voice search. Implemented loyalty points, rewards system, and WhatsApp chat support for enhanced customer retention and support. ",
    github: "https://github.com/neeldhoble/Crave-Cart.git",
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
    <div id="projects" className="relative py-24 px-8 bg-black text-white overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute -top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full blur-[150px] opacity-20 animate-pulse"></div>

      {/* Section Heading */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-12 sm:mb-16 max-w-3xl mx-auto">
          Some of the best works I've crafted with modern technologies 🚀
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-white/20 text-xs sm:text-sm rounded-full text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-black/50 border border-white/30 rounded-lg text-white hover:bg-black/70 transition text-sm sm:text-base"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white hover:opacity-90 transition text-sm sm:text-base"
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
