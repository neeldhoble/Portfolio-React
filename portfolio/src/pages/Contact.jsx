import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",   // 🔑 from EmailJS
        "your_template_id",  // 🔑 from EmailJS
        form.current,
        "your_user_id"       // 🔑 from EmailJS
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong 😢");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-white overflow-hidden bg-black"
    >
      {/* 🔥 Animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
      >
        📬 Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Glassmorphic Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white h-32"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Socials + Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-8"
        >
          <p className="text-lg text-gray-300 text-center">
            Let’s connect on my socials 🚀
          </p>
          <div className="flex gap-6 text-3xl">
            <motion.a
              href="https://linkedin.com/in/neel-dhoble-965388257/"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: 5 }}
              className="text-indigo-400 hover:text-indigo-500"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/neeldhoble"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: -5 }}
              className="text-gray-300 hover:text-gray-400"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://instagram.com/"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: 5 }}
              className="text-pink-400 hover:text-pink-500"
            >
              <FaInstagram />
            </motion.a>
          </div>

          {/* Future: Mapbox/Leaflet integration here */}
            <div className="w-full h-56 rounded-xl overflow-hidden border border-white/20">
                <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=79.6270%2C21.1520%2C79.7170%2C21.2420&layer=mapnik&marker=21.1820%2C79.6670"
                    className="w-full h-full"
                    title="map"
                ></iframe>
            </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
