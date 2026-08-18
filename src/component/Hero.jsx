import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Download, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hema from "../assets/Hema.jpeg";
import "../Styles/style.css";


const ROLES = ["Fullstack Developer", "Frontend Developer", "UI/UX Designer"];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

function useTypewriter(words, typingSpeed = 65, deletingSpeed = 35, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const next = deleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);
      timeout = setTimeout(
        () => setText(next),
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const typed = useTypewriter(ROLES);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-page">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#home" className="logo">
            <span className="logo-bracket">&lt;</span>Hema
            <span className="logo-bracket logo-bracket-alt">/&gt;</span>
          </a>

          <div className="nav-pill">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`pill-link ${
                  activeSection === link.href.slice(1) ? "pill-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <a href="#contact" className="nav-cta">
              Let's Talk
              <ArrowUpRight size={14} />
            </a>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="hero-grid">
          {/* LEFT */}
          <div className="hero-text">
            <p className="eyebrow">Hi, there!</p>

            <h1 className="headline">
              I'm Hema, a<br />
              <span className="headline-role">
                {typed}
                <span className="cursor">|</span>
              </span>
            </h1>

            <p className="subtext">
              I build reliable web applications end to end and design
              interfaces that feel effortless to use — turning ideas into
              clean code and clean code into products people enjoy.
            </p>

            <div className="cta-row">
              <a href="" download className="btn-primary">
                <Download size={17} />
                Download Resume
              </a>
              <a href="#project" className="btn-text">
                View my work
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="social-row">
              <a href="https://github.com/HemaVardhini7" className="social-icon" aria-label="Github">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/hema-vardhini-670518383/" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:h901091@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          {/* <div className="hero-visual">
            <div className="photo-blob">
              <img src={Hema} alt="Hema" className="photo" />
            </div>
          </div> */}
          <div className="hero-visual">
          <div className="photo-frame-wrap">
            <div className="photo-glow" />
            <div className="photo-blob">
              <img src={Hema} alt="Hema" className="photo" />
            </div>
            <span className="photo-sparkle">
              <Sparkles size={18} />
            </span>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}