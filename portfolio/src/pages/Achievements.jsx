import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    title: "First Prize - Basketball (Department Tournament)",
    description: "Won first prize as part of the playing five in 'Insight' tournament.",
    year: "2024",
    certificate: "/certificates/basketball.pdf", // replace with your file path
  },
  {
    title: "Codsoft Internship Certificate",
    description: "Successfully completed internship at Codsoft, gaining real-world experience.",
    year: "2023",
    certificate: "/certificates/codsoft.pdf",
  },
  {
    title: "Microsoft Copilot for Productivity",
    description: "Certified by Microsoft for leveraging AI productivity tools.",
    year: "2023",
    certificate: "/certificates/copilot.pdf",
  },
  {
    title: "Career Essentials in Software Development",
    description: "Certification by Microsoft & LinkedIn Learning.",
    year: "2023",
    certificate: "/certificates/softwaredev.pdf",
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div id="achievements" className="relative py-24 px-8 bg-black text-white overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

      {/* Section Heading */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-12 sm:mb-16">
          A glimpse into some milestones of my journey 🚀
        </p>
      </motion.div>

      {/* Timeline Achievements */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto space-y-8 sm:space-y-12 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-105 transition-all duration-300"
            variants={item}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <FaTrophy className="text-yellow-400 text-2xl sm:text-3xl mt-1 animate-pulse flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{ach.title}</h3>
                <p className="text-gray-300 mb-3 text-sm sm:text-base">{ach.description}</p>
                <p className="text-xs sm:text-sm text-gray-400">📅 {ach.year}</p>
                <button
                  onClick={() => setSelectedCertificate(ach.certificate)}
                  className="mt-4 flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white hover:opacity-90 transition text-sm sm:text-base"
                >
                  <FaCertificate /> View Certificate
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-black font-bold text-xl"
            >
              ✖
            </button>
            <iframe
              src={selectedCertificate}
              title="Certificate"
              className="w-full h-[60vh] sm:h-[70vh] rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;



