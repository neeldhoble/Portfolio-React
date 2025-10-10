import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import logo from "../assets/logo.png";
import resume from "../assets/Neel Dhoble - Resume .pdf";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
        <h1 className="font-bold text-[30px] text-purple-600">
          Port<span className="text-white">folio</span>
        </h1>

        {/* Nav Links - Desktop */}
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

        {/* Socials + Resume - Desktop */}
        <div className="hidden md:flex items-center gap-5 text-white">
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
            href={resume}
            download="Neel_Dhoble_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            Resume <FiDownload />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/20"
      >
        <div className="px-6 py-4 space-y-4 text-right">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="block text-white font-medium py-2 hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center gap-6 pt-4 border-t border-white/20 justify-end">
            <motion.a
              href="https://www.linkedin.com/in/neel-dhoble-965388257/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-white"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/neeldhoble"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-white"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://instagram.com/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-white"
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href={resume}
              download="Neel_Dhoble_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all text-sm"
            >
              Resume <FiDownload />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
