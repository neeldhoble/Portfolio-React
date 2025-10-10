import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png"; // replace with your photo
import Navbar from "../components/Navbar";

const HeroPage = () => {

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden bg-black"
    >
      <Navbar/>
      {/* Spacer to offset fixed navbar height */}
      <div className="h-16 sm:h-20" />
      {/* Desktop gradient background */}
      <div className="hidden lg:block absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-600/20 blur-3xl" />
      </div>

      {/* Floating particles for effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), -50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row flex-1 items-center justify-center px-4 sm:px-6 lg:px-10 w-11/12 sm:w-10/12 max-w-[1080px] mx-auto relative z-10">
        {/* Left: Text Info */}
        <motion.div
          className="flex-1 text-white text-center lg:text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Neel Dhoble 👋
            </span>
          </h1>
          <motion.p
            className="text-base sm:text-lg mb-6 text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            A passionate Web Developer specializing in React, TailwindCSS,
            and MERN Stack. Let's build something amazing together!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-white/20 border border-white/30 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 text-sm sm:text-base"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Right: Animated Photo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profilePic}
            alt="Neel Dhoble"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border border-white/30 backdrop-blur-md"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;





























// import React from "react";
// import { motion } from "framer-motion";
// import profilePic from "../assets/profile.png";
// import Navbar from "../components/Navbar";

// const HeroPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
//       <Navbar />

//       {/* Liquid Gradient Background */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 opacity-40 blur-3xl"
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           backgroundSize: "300% 300%",
//         }}
//       />

//       {/* Neon Grid Overlay */}
//       <div className="absolute inset-0 opacity-20">
//         <svg width="100%" height="100%">
//           <defs>
//             <pattern
//               id="grid"
//               width="60"
//               height="60"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 60 0 L 0 0 0 60"
//                 fill="none"
//                 stroke="rgba(255,255,255,0.2)"
//                 strokeWidth="1"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       {/* Main Section */}
//       <div className="flex flex-1 items-center justify-center px-10 w-10/12 max-w-[1080px] mx-auto relative z-10">
//         {/* Left: Text Info */}
//         <motion.div
//           className="flex-1 text-white"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             Hi, I'm{" "}
//             <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
//               Neel Dhoble 👋
//             </span>
//           </h1>
//           <motion.p
//             className="text-lg mb-6 text-gray-300"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 1 }}
//           >
//             A passionate Web Developer specializing in React, TailwindCSS,
//             and MERN Stack. 🚀 Let’s build something amazing together!
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 bg-white/20 border border-white/30 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300"
//           >
//             View My Work
//           </motion.button>
//         </motion.div>

//         {/* Right: Profile with glow */}
//         <motion.div
//           className="flex-1 flex justify-center relative"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.div
//             className="absolute w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-3xl opacity-40"
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ duration: 6, repeat: Infinity }}
//           />
//           <motion.img
//             src={profilePic}
//             alt="Neel Dhoble"
//             className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border border-white/30 backdrop-blur-md relative z-10"
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 4, repeat: Infinity }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroPage;
