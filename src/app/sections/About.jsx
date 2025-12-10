"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 py-20"
    >
      {/* Left Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <Image
          src="/about.png"
          alt="Mubashar Ali"
          width={350}
          height={350}
          className="rounded-2xl border-4 border-cyan-400 shadow-lg"
        />
      </motion.div>

      {/* Right Side: Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 text-center md:text-left space-y-5"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-2">
          About <span className="text-white">Me</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I m <span className="text-cyan-400 font-semibold">Mubashar Ali</span>, a passionate
          Full-Stack Developer based in Pakistan. I specialize in crafting
          modern, responsive, and user-friendly web applications using
          <span className="text-cyan-400"> React.js, Next.js, Node.js,</span> and
          <span className="text-cyan-400"> Tailwind CSS</span>.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I love turning complex ideas into simple, beautiful, and functional
          web experiences. My focus is on writing clean, scalable, and
          maintainable code that delivers real value.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <a
            href="#skills"
            className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-transparent hover:text-white border-2 border-cyan-400 transition"
          >
            View My Skills
          </a>
          <a
            href="#contact"
            className="border-2 border-cyan-400 text-cyan-400 px-5 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
