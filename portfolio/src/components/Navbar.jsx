// import React from 'react'
// import logo from "../assets/logo.png"
// import linkedin from "../assets/linkedin.png"
// import insta from "../assets/insta.png"
// import github from "../assets/github.png"
// import resume from "../assets/resume.png"

// const Navbar = () => {
//   return (
//     <div className='w-10/12 max-w-[1080px] mx-auto bg-black flex justify-between items-center'>
//         <div>
//           <img src={logo} alt="logo" className='w-[60px]'/>
//         </div>

//         <div>
          
//           <div className='flex items-center gap-5'>
//               <a href="https://www.linkedin.com/in/neel-dhoble-965388257/">
//                 <img src={linkedin} alt="linkedin" className='w-[30px]'/>
//               </a>

//               <a href="">
//                 <img src={github} alt="insta" className='w-[30px]'/>
//               </a>

//               <a href="">
//                 <img src={insta} alt="insta" className='w-[30px]'/>
//               </a>

//               <a href="">
//                 <img src={resume} alt="insta" className='w-[20px]'/>
//               </a>



              
//           </div>

//         </div>
//     </div>
//   )
// }

// export default Navbar

















import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect: change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-10/12 max-w-[1200px] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={logo} alt="logo" className="w-[55px] cursor-pointer" />
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Socials + Resume */}
        <div className="flex items-center gap-5 text-white">
          <motion.a
            href="https://www.linkedin.com/in/neel-dhoble-965388257/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaLinkedin size={22} />
          </motion.a>

          <motion.a
            href="https://github.com/neeldhoble"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <FaGithub size={22} />
          </motion.a>

          <motion.a
            href="https://instagram.com/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaInstagram size={22} />
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href="../assets/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            Resume <FiDownload />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
