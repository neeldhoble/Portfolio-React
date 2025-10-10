// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FileBadge } from "lucide-react";

// const certificates = [
//   {
//     title: "Microsoft Copilot Certification",
//     issuer: "Microsoft",
//     img: "/certificates/copilot.png",
//   },
//   {
//     title: "Career Essentials in Software Development",
//     issuer: "Microsoft & LinkedIn",
//     img: "/certificates/career-essentials.png",
//   },
//   {
//     title: "Codsoft Internship Certificate",
//     issuer: "Codsoft",
//     img: "/certificates/codsoft.png",
//   },
//   {
//     title: "MKCL Java Certification",
//     issuer: "MKCL",
//     img: "/certificates/java.png",
//   },
//   {
//     title: "Python Programming",
//     issuer: "Coursera",
//     img: "/certificates/python.png",
//   },
//   {
//     title: "AWS Cloud Practitioner",
//     issuer: "Amazon Web Services",
//     img: "/certificates/aws.png",
//   },
// ];

// const Certificates = () => {
//   const [selectedCert, setSelectedCert] = useState(null);

//   return (
//     <section
//       id="certificates"
//       className="relative py-20 px-6 text-white overflow-hidden"
//     >
//       {/* 🔥 Background with animated blobs */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-indigo-950 to-purple-950">
//         <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-5xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
//       >
//         🎓 Certificates
//       </motion.h2>

//       {/* Certificates Grid */}
//       <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {certificates.map((cert, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
//             className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-pink-500/30 transition-all"
//           >
//             <FileBadge className="text-pink-400 mb-4" size={40} />
//             <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
//             <p className="text-gray-300 mb-4">Issued by {cert.issuer}</p>
//             <button
//               onClick={() => setSelectedCert(cert.img)}
//               className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md hover:scale-105 transition"
//             >
//               View Certificate
//             </button>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal for Certificate Preview */}
//       {selectedCert && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
//           <motion.div
//             initial={{ scale: 0.7, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.7, opacity: 0 }}
//             className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-4 w-[350px] md:w-[600px] flex flex-col items-center"
//           >
//             <img
//               src={selectedCert}
//               alt="Certificate"
//               className="rounded-lg w-full object-contain max-h-[70vh]"
//             />
//             <button
//               onClick={() => setSelectedCert(null)}
//               className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 transition"
//             >
//               Close
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Certificates;




import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileBadge } from "lucide-react";

const certificates = [
  {
    title: "Microsoft Copilot Certification",
    issuer: "Microsoft",
    img: "/certificates/copilot.png",
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    img: "/certificates/career-essentials.png",
  },
  {
    title: "Codsoft Internship Certificate",
    issuer: "Codsoft",
    img: "/certificates/codsoft.png",
  },
  {
    title: "MKCL Java Certification",
    issuer: "MKCL",
    img: "/certificates/java.png",
  },
  {
    title: "Python Programming",
    issuer: "Coursera",
    img: "/certificates/python.png",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    img: "/certificates/aws.png",
  },
];

const floatingIcons = [
  { top: "15%", left: "10%", delay: 0 },
  { top: "40%", left: "90%", delay: 1 },
  { top: "70%", left: "20%", delay: 2 },
  { top: "85%", left: "75%", delay: 3 },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative py-20 px-6 text-white overflow-hidden bg-black"
    >
      {/* 🔥 Floating Certificate Icons as Animation */}
      {floatingIcons.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-400/40"
          style={{ top: pos.top, left: pos.left }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 6,
            delay: pos.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FileBadge size={50} />
        </motion.div>
      ))}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-4"
      >
        🎓 Certificates
      </motion.h2>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative z-10 px-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            className="relative p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-pink-500/30 transition-all"
          >
            <FileBadge className="text-pink-400 mb-3 sm:mb-4" size={32} />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Issued by {cert.issuer}</p>
            <button
              onClick={() => setSelectedCert(cert.img)}
              className="px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md hover:scale-105 transition text-sm sm:text-base"
            >
              View Certificate
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for Certificate Preview */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-3 sm:p-4 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] flex flex-col items-center max-h-[90vh] overflow-y-auto"
          >
            <img
              src={selectedCert}
              alt="Certificate"
              className="rounded-lg w-full object-contain max-h-[60vh] sm:max-h-[70vh]"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 transition text-sm sm:text-base"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
