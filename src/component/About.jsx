import React from "react";
import { FileText, GraduationCap, Briefcase, Download } from "lucide-react";
import "../Styles/style.css";

import Hema from "../assets/Hema.jpeg";

const SKILLS = ["React", "Node.js", "UI/UX", "Full Stack"];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-header">
          <h2 className="about-title">
            About Me
            {/* <p className="about-eyebrow">Skills</p> */}
            <span className="title-underline" />
          </h2>
        </div>

        <div className="about-grid">
          {/* LEFT COLUMN */}
          <div className="about-left">
            <div className="info-card">
              <div className="card-heading">
                <FileText size={18} />
                Bio
              </div>
              <p className="card-text">
                Computer Science student with a passion for building
                thoughtful, full-stack products. I enjoy turning complex
                problems into clean interfaces and reliable code — from
                database design to pixel-perfect UI.
              </p>
            </div>

            <div className="details-grid">
              <div className="info-card">
                <div className="card-heading">
                  <GraduationCap size={18} />
                  Education
                </div>
                <h4 className="entry-title">[Bsc Computer Science]</h4>
                <p className="entry-sub">[Sarvajinik University - SRKI]</p>
                <p className="entry-sub">[2024 &ndash; Present]</p>
                {/* <p className="entry-highlight">[Notable achievement]</p> */}
              </div>

              <div className="info-card">
                <div className="card-heading">
                  <Briefcase size={18} />
                  Experience
                </div>
                <h4 className="entry-title">[Front-End Developer Intern]</h4>
                <p className="entry-sub">[Setblue]</p>
                <p className="entry-sub">[One Month]</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-right">
            <div className="profile-card">
              <div className="profile-photo-wrap">
                <img src={Hema} alt="Hema" className="profile-photo" />
                <span className="status-badge">
                  <span className="status-dot" />
                  Open to work
                </span>
              </div>

              <h3 className="profile-name">Hema</h3>
              <p className="profile-role">Fullstack Developer</p>

              <div className="chip-row">
                {SKILLS.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>

              <a href="#" download className="profile-btn">
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}