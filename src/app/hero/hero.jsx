"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Image from "next/image";

export default function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full-Stack Developer",
        "Web Designer",
        "Next.js Developer",
        "React Expert",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col md:flex-row items-center justify-center px-6 text-white pt-20"
    >
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-cyan-400"
        >
          Hi, I'm <span className="text-white">Mubashar Ali</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl"
        >
          <span ref={typedElement}></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-md mx-auto md:mx-0"
        >
          I m a passionate developer who loves creating responsive, modern, and
          user-friendly web applications using React, Next.js, Tailwind CSS, and
          Node.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center md:justify-start gap-4 pt-4"
        >
          <a
            href="#contact"
            className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-transparent hover:text-white border-2 border-cyan-400 transition"
          >
            Contact Me
          </a>
          <a
            href="#about"
            className="border-2 border-cyan-400 text-cyan-400 px-5 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <Image
          src="/profile.png"
          alt="Mubashar Ali"
          width={350}
          height={350}
          className="rounded-full border-4 border-cyan-400 shadow-lg"
        />
      </motion.div>
    </section>
  );
}
