"use client";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaGlobe, 
  FaWhatsapp, 
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#112e42] text-gray-300 py-6 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side - Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Mubashar Ali. All rights reserved.
        </p>

        {/* Right Side - Social Links */}
        <div className="flex gap-6 text-cyan-400 text-2xl">
          <a href="https://facebook.com" target="_blank" className="hover:text-white transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mubasharali557" target="_blank" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://zynof.com" target="_blank" className="hover:text-white transition">
            <FaGlobe />
          </a>
          <a href="https://wa.me/923245233273" target="_blank" className="hover:text-white transition">
            <FaWhatsapp />
          </a>
          <a href="mailto:alimubasharali732@gmail.com" target="_blank" className="hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}



