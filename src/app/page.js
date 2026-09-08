"use client";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  FaDownload,
  FaArrowUp,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [sending, setSending] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const typed = new Typed(".text", {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "MERN Developer",
      ],
      typeSpeed: 70,
      backSpeed: 45,
      backDelay: 1200,
      loop: true,
      smartBackspace: true,
    });

    // Active section observer
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -20% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    // Navbar background + back-to-top visibility on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      typed.destroy();
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.12, duration: 0.5, type: "spring" },
    }),
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // CV Download function
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mubashar.pdf";
    link.download = "Mubashar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_zss5kpd",
        "template_5rhzfxy",
        e.target,
        "JwWYq_RFEMIMVvESx"
      );
      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      alert("Failed to send message, try again later.");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const socials = [
    {
      icon: <FaFacebook />,
      link: "https://facebook.com",
      color: "#1877F2",
      label: "Facebook",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/mubashar-ali",
      color: "#0A66C2",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/923245233273",
      color: "#25D366",
      label: "WhatsApp",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/mubasharali557",
      color: "#FFFFFF",
      label: "GitHub",
    },
  ];

  const services = [
    {
      icon: <FaGlobe />,
      title: "Full Stack Development",
      desc: "Building responsive, fast, and scalable web applications tailored to your needs.",
      accent: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaPaintBrush />,
      title: "Frontend Development",
      desc: "Crafting intuitive and user-friendly designs with modern tools and practices.",
      accent: "from-amber-400 to-orange-500",
    },
    {
      icon: <FaCog />,
      title: "Backend Development",
      desc: "Creating robust, secure, and scalable server-side applications and APIs.",
      accent: "from-slate-400 to-slate-600",
    },
    {
      icon: <FaGithub />,
      title: "Version Control",
      desc: "Managing repositories, version control, and collaborative development.",
      accent: "from-violet-400 to-fuchsia-500",
    },
  ];

  const projects = [
    {
      img: "/image/p10.jpg",
      title: "Watch Website",
      desc: "Timepieces curated with intention — a full MERN stack store with admin panel, JWT auth, and payment system.",
      link: "https://watch-3.vercel.app/",
    },
    {
      img: "/image/p9.jpg",
      title: "AI Image Website",
      desc: "Full MERN stack AI-image store with admin panel, JWT auth, and payment system.",
      link: "https://my-st-iy2.vercel.app/",
    },
    {
      img: "/image/p1.jpg",
      title: "E-Commerce Website",
      desc: "Full MERN stack e-commerce store with admin panel, JWT auth, and payment system.",
      link: "https://stowave.com/",
    },
    {
      img: "/image/p2.jpg",
      title: "Shopping Website",
      desc: "An online kirana & lifestyle store with everyday essentials, groceries, and home care products.",
      link: "https://shopfrontend-beta.vercel.app/",
    },
    {
      img: "/image/p3.jpg",
      title: "Emaanmall Shopping Website",
      desc: "Full-stack blog platform with CRUD, image upload, and role-based authentication.",
      link: "https://emaanmall.com/",
    },
    {
      img: "/image/p4.jpg",
      title: "Medmate Website",
      desc: "Your online home for healthcare — full MERN stack store with admin panel, JWT auth, and payments.",
      link: "https://medmate.com.au/",
    },
    {
      img: "/image/p5.jpg",
      title: "HS Electric Store",
      desc: "Full MERN stack e-commerce store with admin panel, JWT auth, and payment system.",
      link: "https://hselectricstore.com/",
    },
    {
      img: "/image/p6.jpg",
      title: "J.Jamshad",
      desc: "Full MERN stack e-commerce store with admin panel, JWT auth, and payment system.",
      link: "https://j-jamshad-website.vercel.app/",
    },
    {
      img: "/image/p7.png",
      title: "Daymora Web Solutions",
      desc: "A professional web solutions company helping businesses build a strong online presence.",
      link: "https://daymora-web-solutions.vercel.app/",
    },
    {
      img: "/image/p8.jpg",
      title: "Institute of Career Development",
      desc: "Web solutions helping businesses build a strong online presence and achieve digital goals.",
      link: "https://manzoor-dun.vercel.app/",
    },
  ];

  const skills = [
    { name: "HTML", icon: "bxl-html5", color: "#E34F26", level: 90 },
    { name: "CSS", icon: "bxl-css3", color: "#1572B6", level: 85 },
    { name: "JavaScript", icon: "bxl-javascript", color: "#F7DF1E", level: 80 },
    { name: "React", icon: "bxl-react", color: "#61DAFB", level: 75 },
    { name: "Next.js", icon: "bxl-nodejs", color: "#A78BFA", level: 70 },
    { name: "Node.js", icon: "bxl-nodejs", color: "#339933", level: 75 },
    { name: "Python", icon: "bxl-python", color: "#3776AB", level: 70 },
    { name: "MongoDB", icon: "bxl-mongodb", color: "#47A248", level: 65 },
    { name: "GitHub", icon: "bxl-git", color: "#F05032", level: 80 },
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white scroll-smooth selection:bg-cyan-500/30 selection:text-white">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNavClick("#home")}
          >
            Mubashar<span className="text-white">.</span>
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-1 text-gray-300 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.link);
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.link.substring(1)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeSection === item.link.substring(1) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-200 text-2xl focus:outline-none hover:text-cyan-400 transition p-2 rounded-lg hover:bg-white/5"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
              <ul className="flex flex-col gap-1 text-gray-300 px-6 py-5">
                {navItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.link);
                      }}
                      className={`block py-3 px-4 rounded-lg transition ${
                        activeSection === item.link.substring(1)
                          ? "bg-cyan-500/10 text-cyan-400 font-semibold"
                          : "hover:bg-white/5 hover:text-cyan-400"
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
                <li className="mt-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="block bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 rounded-lg shadow-md transition text-center font-semibold"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 min-h-screen pt-32 md:pt-28 gap-14 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/image/image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-cyan-950/40"></div>

        {/* Decorative glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6 max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full"
          >
            👋 Hello, it&apos;s me
          </motion.span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-400 text-transparent bg-clip-text">
            Mubashar Ali
          </h1>

          <h3 className="text-2xl md:text-3xl text-gray-200 font-medium h-10">
            I&apos;m a <span className="text-cyan-400 text font-semibold"></span>
          </h3>

          <p className="text-gray-300 leading-relaxed text-lg">
            I&apos;m a Full Stack Developer with a year of experience, passionate
            about building dynamic web applications. I enjoy tackling
            challenges and continuously improving my skills in both front-end
            and back-end technologies.
          </p>

          <div className="flex gap-4 text-2xl">
            {socials.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="grid place-items-center w-12 h-12 bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                whileHover={{ scale: 1.15, y: -4, rotate: 3 }}
                style={{ color: item.color }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap pt-2">
            <motion.a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#about");
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 rounded-xl inline-block shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow font-semibold text-white"
            >
              More About Me
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              className="bg-white/5 border border-white/15 backdrop-blur-md px-7 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-white/10 hover:border-cyan-400/40 transition-all font-semibold text-white"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload />
              Download CV
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-[spin_12s_linear_infinite]"></div>
            <Image
              src="/Mubashar.jpg"
              alt="Mubashar Ali - Full Stack Developer"
              width={384}
              height={384}
              className="relative rounded-full object-cover border-4 border-cyan-500/60 shadow-2xl w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-400 text-xs z-10"
        >
          <span>Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-500 flex justify-center pt-1.5">
            <span className="w-1 h-1.5 bg-cyan-400 rounded-full"></span>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 md:px-16 py-24 bg-gray-950 text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <p className="text-center text-cyan-400 font-semibold tracking-widest text-sm uppercase mb-3">
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed space-y-5 bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <p>
              I am{" "}
              <span className="text-cyan-400 font-semibold">
                Mubashar Ali
              </span>
              , a passionate Full Stack Developer with expertise in building
              modern, responsive web applications using the latest
              technologies. I thrive on solving complex problems and
              delivering high-quality solutions.
            </p>
            <p>
              With a strong foundation in both frontend and backend
              development, I specialize in creating seamless user experiences
              and robust server-side architectures. My journey in web
              development has equipped me with the skills to turn ideas into
              functional, scalable applications.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or
              continuously learning to stay updated with the ever-evolving
              tech landscape.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-16 py-24 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-cyan-400 font-semibold tracking-widest text-sm uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                whileHover={{ y: -8 }}
                className="group relative bg-gray-800/60 p-8 rounded-2xl shadow-lg transition-all duration-300 text-center border border-gray-700/60 hover:border-cyan-500/40 hover:shadow-cyan-500/10 overflow-hidden"
              >
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 rounded-full`}
                />
                <div className="flex justify-center mb-5">
                  <div
                    className={`grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-16 py-24 bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-cyan-400 font-semibold tracking-widest text-sm uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            My <span className="text-cyan-400">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i % 3}
              whileHover={{ y: -6 }}
              className="group bg-gray-800/60 border border-gray-700/60 rounded-2xl overflow-hidden shadow-lg hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="flex items-center gap-2 bg-cyan-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    View Live <FaExternalLinkAlt size={12} />
                  </span>
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors"
                >
                  View Project <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 md:px-16 py-24 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-cyan-400 font-semibold tracking-widest text-sm uppercase mb-3">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={i % 3}
                whileHover={{ y: -4 }}
                className="flex flex-col bg-gray-800/60 p-6 rounded-xl shadow-md hover:shadow-cyan-400/10 transition-all duration-300 border border-gray-700/60 hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <i
                    className={`bx ${skill.icon} text-3xl`}
                    style={{ color: skill.color }}
                  ></i>
                  <span className="font-semibold text-lg text-white">
                    {skill.name}
                  </span>
                  <span className="ml-auto text-sm font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700/60 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-16 py-24 bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-cyan-400 font-semibold tracking-widest text-sm uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                Let&apos;s work together ✨
              </h4>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Feel free to reach out for collaborations or just a friendly
                hello. I&apos;m always open to discussing new projects and
                opportunities.
              </p>
              <ul className="space-y-5 text-gray-300">
                <li className="flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-cyan-500/10 text-cyan-400 text-lg shrink-0">
                    <FaEnvelope />
                  </span>
                  <span className="text-base break-all">
                    mubasharali.web@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-cyan-500/10 text-cyan-400 text-lg shrink-0">
                    <FaPhone />
                  </span>
                  <span className="text-base">
                    0324-5233273 / 0314-0434545
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-cyan-500/10 text-cyan-400 text-lg shrink-0">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="text-base">Pakistan (Lahore, Punjab)</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-8">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid place-items-center w-11 h-11 bg-white/5 border border-white/10 rounded-full text-xl transition-colors hover:border-cyan-400/50"
                    whileHover={{ scale: 1.15, y: -3 }}
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <input
                name="from_name"
                type="text"
                placeholder="Enter your Name"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/[0.07] outline-none transition-all text-white placeholder-gray-500"
                required
              />
              <input
                name="from_email"
                type="email"
                placeholder="Enter your Email"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/[0.07] outline-none transition-all text-white placeholder-gray-500"
                required
              />
              <input
                name="subject"
                type="text"
                placeholder="Enter Your Subject"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/[0.07] outline-none transition-all text-white placeholder-gray-500"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Enter Your Message"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/[0.07] outline-none transition-all resize-none text-white placeholder-gray-500"
                required
              ></textarea>
              <motion.button
                type="submit"
                className={`bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 rounded-xl transition shadow-lg shadow-cyan-500/20 font-semibold text-lg text-white ${
                  sending ? "opacity-70 cursor-not-allowed" : "hover:shadow-cyan-500/40"
                }`}
                whileHover={{ scale: sending ? 1 : 1.02, y: sending ? 0 : -2 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>
  {/* Back to top button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}