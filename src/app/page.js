"use client";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { 
  FaFacebook, 
  FaLinkedin, 
  FaWhatsapp, 
  FaGithub, 
  FaGlobe, 
  FaPaintBrush, 
  FaCog, 
  FaBars, 
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload
} from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const formRef = useRef(); // Added for EmailJS

  useEffect(() => {
    const typed = new Typed(".text", {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "MERN Developer",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => {
      typed.destroy();
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, type: "spring" },
    }),
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mubashar.pdf";
    link.download = "Mubashar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "About" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Project", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Updated handleSubmit with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",    // Replace with your EmailJS Service ID
      "YOUR_TEMPLATE_ID",   // Replace with your EmailJS Template ID
      formRef.current,
      "YOUR_PUBLIC_KEY"     // Replace with your EmailJS Public Key
    ).then(
      () => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        console.error(error);
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Mubashar Ali</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-300">
            {navItems.map((item, i) => (
              <li key={i}>
                <a 
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.link);
                  }}
                  className={`hover:text-cyan-400 transition ${
                    activeSection === item.link.substring(1) ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 text-2xl focus:outline-none hover:text-cyan-400 transition"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden md:inline-block bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 shadow-md transition font-semibold"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4">
            <ul className="flex flex-col gap-4 text-gray-300">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.link);
                    }}
                    className={`block hover:text-cyan-400 transition ${
                      activeSection === item.link.substring(1) ? 'text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="block bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 shadow-md transition text-center font-semibold"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 min-h-screen pt-28 gap-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6 max-w-xl"
        >
          <h3 className="text-lg text-cyan-300">👋 Hello Its Me</h3>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Mubashar Ali
          </h1>
          <h3 className="text-2xl text-gray-200">
            And I m a <span className="text-cyan-400 text"></span>
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I m a Full Stack Developer with a year of experience, passionate
            about building dynamic web applications. I enjoy tackling challenges
            and continuously improving my skills in both front-end and back-end
            technologies.
          </p>

          <div className="flex gap-5 text-3xl">
            {[ 
              { icon: <FaFacebook style={{ color: "#1877F2" }} />, link: "https://facebook.com" },
              { icon: <FaLinkedin style={{ color: "#0A66C2" }} />, link: "https://linkedin.com/in/mubashar-ali" },
              { icon: <FaWhatsapp style={{ color: "#25D366" }} />, link: "https://wa.me/923245233273" },
              { icon: <FaGithub style={{ color: "#FFFFFF" }} />, link: "https://github.com/mubasharali557" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition bg-gray-800 p-3 rounded-full hover:bg-cyan-900 shadow-lg"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                whileHover={{ scale: 1.3, rotate: 5 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="About"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="bg-cyan-500 px-6 py-3 rounded-lg inline-block hover:bg-cyan-600 shadow-lg transition font-semibold text-white"
            >
              More About Me
            </a>
            
            <motion.button
              onClick={handleDownloadCV}
              className="bg-green-500 px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-green-600 shadow-lg transition font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download CV
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r blur-2xl animate-pulse"></div>
            <Image
              src="/Mubashar.jpg"
              alt="Mubashar Ali - Full Stack Developer"
              width={384}
              height={384}
              className="rounded-full object-cover border-4 border-cyan-600 shadow-lg w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-20 bg-gray-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              I am <span className="text-cyan-400 font-semibold">Mubashar Ali</span>, a passionate Full Stack Developer with expertise in
              building modern, responsive web applications using the latest
              technologies. I thrive on solving complex problems and delivering
              high-quality solutions.
            </p>
            <p>
              With a strong foundation in both frontend and backend development,
              I specialize in creating seamless user experiences and robust
              server-side architectures. My journey in web development has
              equipped me with the skills to turn ideas into functional,
              scalable applications.
            </p>
            <p>
              When I m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or continuously learning to
              stay updated with the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services, Projects, Skills Sections remain unchanged... */}

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-16 py-20 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl mb-6 text-cyan-400">Let s work together ✨</h4>
              <p className="text-gray-300 text-lg mb-6">
                Feel free to reach out for collaborations or just a friendly hello.
                I m always open to discussing new projects and opportunities.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3 text-lg">
                  <FaEnvelope style={{ color: "#06B6D4", fontSize: "1.5rem" }} />
                  <span>alimubasharali732@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <FaPhone style={{ color: "#06B6D4", fontSize: "1.5rem" }} />
                  <span>0324-5233273 / 0314-0434545</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <FaMapMarkerAlt style={{ color: "#06B6D4", fontSize: "1.5rem" }} />
                  <span>Pakistan(Lahore Punjab )</span>
                </li>
              </ul>
              <div className="flex gap-4 text-2xl mt-8">
                {[ 
                  { icon: <FaFacebook style={{ color: "#1877F2" }} />, link: "https://facebook.com" },
                  { icon: <FaLinkedin style={{ color: "#0A66C2" }} />, link: "https://linkedin.com/in/mubashar-ali" },
                  { icon: <FaWhatsapp style={{ color: "#25D366" }} />, link: "https://wa.me/923245233273" },
                  { icon: <FaGithub style={{ color: "#FFFFFF" }} />, link: "https://github.com/mubasharali557" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition bg-gray-700 p-3 rounded-full hover:bg-cyan-900 shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form 
              ref={formRef} // Added EmailJS ref
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <input 
                type="text" 
                name="user_name"
                placeholder="Enter your Name" 
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none transition text-white placeholder-gray-400" 
                required 
              />
              <input 
                type="email" 
                name="alimubasharali732@gmail.com"
                placeholder="Enter your Email" 
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none transition text-white placeholder-gray-400" 
                required 
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Enter Your Subject" 
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none transition text-white placeholder-gray-400" 
                required 
              />
              <textarea 
                name="message"
                rows="5" 
                placeholder="Enter Your Message" 
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none transition resize-none text-white placeholder-gray-400"
                required
              ></textarea>
              <motion.button 
                type="submit" 
                className="bg-cyan-500 py-3 rounded hover:bg-cyan-600 transition shadow-lg font-semibold text-lg text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
