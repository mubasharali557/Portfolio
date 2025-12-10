"use client";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaServer, FaMobileAlt, FaShoppingCart } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-5xl text-cyan-400" />,
      title: "Web Development",
      desc: "Building dynamic, responsive, and user-friendly websites using React, Next.js, and Node.js.",
    },
    {
      icon: <FaPaintBrush className="text-5xl text-pink-400" />,
      title: "UI / UX Design",
      desc: "Designing modern, clean, and engaging user interfaces with a focus on accessibility and experience.",
    },
    {
      icon: <FaServer className="text-5xl text-green-400" />,
      title: "Backend Development",
      desc: "Creating powerful RESTful APIs with Node.js, Express.js, and MongoDB for smooth functionality.",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-yellow-400" />,
      title: "Responsive Design",
      desc: "Ensuring every design looks and performs flawlessly across mobile, tablet, and desktop devices.",
    },
    {
      icon: <FaShoppingCart className="text-5xl text-indigo-400" />,
      title: "E-Commerce Solutions",
      desc: "Developing complete online stores with product management, carts, and secure checkout systems.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gray-950 text-white py-20 px-6 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-12 text-center"
      >
        My <span className="text-white">Services</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-cyan-400/30 hover:-translate-y-2 transition"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
