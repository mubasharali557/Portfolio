"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white py-20 px-6 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-12 text-center"
      >
        Contact <span className="text-white">Me</span>
      </motion.h2>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-cyan-400">Get in Touch</h3>
          <p className="text-gray-300">
            Feel free to reach out for collaborations, freelance work, or just to say hi!
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" /> mubashar.dev@example.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" /> +92 300 1234567
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" /> Lahore, Pakistan
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" className="text-2xl hover:text-cyan-400 transition"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" className="text-2xl hover:text-cyan-400 transition"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" className="text-2xl hover:text-cyan-400 transition"><FaGithub /></a>
            <a href="https://wa.me/923001234567" target="_blank" className="text-2xl hover:text-cyan-400 transition"><FaWhatsapp /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-semibold py-2 rounded-full hover:bg-transparent hover:text-white border-2 border-cyan-400 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
