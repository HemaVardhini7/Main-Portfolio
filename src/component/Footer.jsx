import React from "react";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Styles/style.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* LEFT */}
        <div className="footer-brand">
          <p className="footer-name">Hema</p>
          <p className="footer-role">Fullstack Developer</p>
        </div>

        {/* CENTER */}
        <div className="footer-social">
          <a href="https://github.com/HemaVardhini7" className="footer-icon" aria-label="Github">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hema-vardhini-670518383/" className="footer-icon" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:h901091@gmail.com" className="footer-icon" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        {/* RIGHT */}
        <div className="footer-meta">
          <p className="footer-copy">&copy; {year} Hema</p>
          <p className="footer-credit">
            Designed & Developed by Hema <Heart size={13} className="footer-heart" />
          </p>
        </div>
      </div>
    </footer>
  );
}