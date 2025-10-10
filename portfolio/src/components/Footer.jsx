// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaMedium,
//   FaArrowUp,
//   FaCertificate,
// } from "react-icons/fa";

// const Footer = () => {
//   const [showCert, setShowCert] = useState(false);

//   const certificates = [
//     { title: "Microsoft Copilot for Productivity", img: "/certs/copilot.png" },
//     { title: "Career Essentials in Software Dev", img: "/certs/software.png" },
//     { title: "MKCL Java", img: "/certs/java.png" },
//     { title: "Codsoft Internship", img: "/certs/codsoft.png" },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mt-20">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
//         {/* Left: Branding */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-bold mb-3">🚀 Neel Dhoble</h2>
//           <p className="text-gray-300">
//             Building modern web experiences with MERN, AI & Cloud.
//           </p>
//         </motion.div>

//         {/* Middle: Quick Links */}
//         <motion.ul
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col space-y-2 text-lg font-medium"
//         >
//           <li>
//             <a href="#home" className="hover:text-pink-400 transition">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="hover:text-pink-400 transition">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:text-pink-400 transition">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#blog" className="hover:text-pink-400 transition">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-pink-400 transition">
//               Contact
//             </a>
//           </li>
//         </motion.ul>

//         {/* Right: Socials + Certificates */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center md:items-end space-y-4"
//         >
//           {/* Social Icons */}
//           <div className="flex space-x-4 text-2xl">
//             <a
//               href="https://github.com/neeldhoble"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-400 transition transform hover:scale-110"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://linkedin.com/in/neeldhoble"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-400 transition transform hover:scale-110"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-400 transition transform hover:scale-110"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://medium.com/@yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-400 transition transform hover:scale-110"
//             >
//               <FaMedium />
//             </a>
//           </div>

//           {/* Certificate Button */}
//           <button
//             onClick={() => setShowCert(true)}
//             className="px-5 py-2 bg-pink-600 rounded-xl flex items-center gap-2 hover:bg-pink-700 transition"
//           >
//             <FaCertificate /> View Certificates
//           </button>
//         </motion.div>
//       </div>

//       {/* Copyright */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-center mt-10 text-gray-400"
//       >
//         © {new Date().getFullYear()} Neel Dhoble. All Rights Reserved.
//       </motion.div>

//       {/* Scroll To Top Button */}
//       <motion.button
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="absolute right-5 bottom-5 bg-pink-600 hover:bg-pink-700 p-3 rounded-full shadow-lg"
//       >
//         <FaArrowUp className="text-white text-xl" />
//       </motion.button>

//       {/* Certificate Modal */}
//       {showCert && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl w-full relative">
//             <button
//               onClick={() => setShowCert(false)}
//               className="absolute top-2 right-3 text-black text-2xl hover:text-red-500"
//             >
//               ✖
//             </button>
//             <h3 className="text-2xl font-bold mb-6 text-center text-black">
//               📜 Certificates
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {certificates.map((cert, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.05 }}
//                   className="p-3 bg-gray-100 rounded-lg shadow text-center"
//                 >
//                   <img
//                     src={cert.img}
//                     alt={cert.title}
//                     className="rounded-md mb-2 h-32 w-full object-cover"
//                   />
//                   <p className="text-black text-sm font-medium">{cert.title}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </footer>
//   );
// };

// export default Footer;



















import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaCertificate,
} from "react-icons/fa";

const Footer = () => {
  const [showCert, setShowCert] = useState(false);

  const certificates = [
    { title: "Microsoft Copilot for Productivity", img: "/certs/copilot.png" },
    { title: "Career Essentials in Software Dev", img: "/certs/software.png" },
    { title: "MKCL Java", img: "/certs/java.png" },
    { title: "Codsoft Internship", img: "/certs/codsoft.png" },
  ];

  return (
    <footer className="relative overflow-hidden text-white pt-20 pb-10 bg-black">
      {/* 🌌 Gradient Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-glow absolute inset-0"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Neel Dhoble
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Merging MERN, AI & Cloud into real-world innovations 
          </p>
        </motion.div>

        {/* Links */}
        <motion.ul
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-3 text-base sm:text-lg font-medium text-center md:text-left"
        >
          {["Home", "Skills", "Projects", "Blog", "Contact"].map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.2, rotate: 2 }}
              className="cursor-pointer hover:text-pink-400 transition"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Socials + Certificates */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1"
        >
          {/* Floating Socials */}
          <div className="flex space-x-4 sm:space-x-6 text-2xl sm:text-3xl relative">
            {[FaGithub, FaLinkedin, FaTwitter, FaMedium].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.4, rotate: 10 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hover:text-pink-400 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Certificates */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 1 }}
            onClick={() => setShowCert(true)}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-pink-500/50 transition text-sm sm:text-base"
          >
            <FaCertificate /> View Certificates
          </motion.button>
        </motion.div>
      </div>

      {/* 🔄 Infinite Scrolling Marquee */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="mt-12 text-center text-lg font-semibold text-pink-300"
      >
        🚀 Let’s Build Together | MERN | AI | Cloud | Innovation | 🚀
      </motion.div>

      {/* Certificate Modal */}
      {showCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg max-w-4xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowCert(false)}
              className="absolute top-2 right-3 text-black text-2xl hover:text-red-500"
            >
              ✖
            </button>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-black">
              📜 Certificates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 bg-gray-100 rounded-lg shadow text-center cursor-pointer"
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="rounded-md mb-2 h-24 sm:h-32 w-full object-cover"
                  />
                  <p className="text-black text-xs sm:text-sm font-semibold">{cert.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

/* 🌈 Gradient Glow CSS */
const style = document.createElement("style");
style.innerHTML = `
.gradient-glow {
  background: radial-gradient(circle at 20% 20%, rgba(99,102,241,0.15), transparent 60%),
              radial-gradient(circle at 80% 30%, rgba(168,85,247,0.15), transparent 60%),
              radial-gradient(circle at 50% 80%, rgba(236,72,153,0.15), transparent 60%);
  background-size: 200% 200%;
  animation: glowMove 15s infinite alternate ease-in-out;
}
@keyframes glowMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
`;
document.head.appendChild(style);
