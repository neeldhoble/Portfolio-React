import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, School, BookOpen } from "lucide-react"; // icons

const educationData = [
  {
    year: "2007 – 2020",
    title: "Royal Public School, Bhandara",
    description:
      "Completed primary & secondary education with strong foundation in academics and extracurriculars.",
    icon: <School className="w-8 h-8 text-indigo-400" />,
  },
  {
    year: "2020 – 2022",
    title: "Oasis International School, Bhandara",
    description:
      "Higher Secondary (11th & 12th) with focus on Science & Mathematics, building technical curiosity.",
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
  },
  {
    year: "2022 – Present",
    title: "St. Vincent Pallotti College of Engineering, Nagpur",
    description:
      "Pursuing B.Tech in Computer Science and Business Systems. Passion for Web Dev, AI & Entrepreneurship.",
    icon: <GraduationCap className="w-8 h-8 text-pink-400" />,
  },
];

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-12 sm:mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-4"
      >
        🎓 My Education Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row">
        {/* Vertical Line - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>

        {/* Timeline Content */}
        <div className="flex-1 lg:w-2/3">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              className={`mb-8 sm:mb-12 flex justify-center lg:justify-${
                index % 2 === 0 ? "start" : "end"
              } w-full`}
            >
              <div className="w-full lg:w-1/2 px-4 lg:px-6">
                <div className="bg-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {edu.icon}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{edu.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">{edu.year}</p>
                  <p className="text-sm sm:text-base text-gray-400">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Right-Side Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex lg:flex-col items-center justify-center w-full lg:w-1/3 lg:pl-10 mt-8 lg:mt-0"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
          >
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </motion.div>

          <div className="ml-4 lg:ml-0 lg:text-center">
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-300">
              Learning is a Journey, Not a Destination 🚀
            </p>

            {/* Animated Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mt-4 lg:mt-8 text-center"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                18+
              </h3>
              <p className="text-sm sm:text-base text-gray-400">Years of Learning</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Glow Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Education;






