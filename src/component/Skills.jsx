import React from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiGit,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiWordpress,
  SiFigma,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import "../Styles/style.css";

// react-icons doesn't ship a plain "C" logo 
function CIcon() {
  return <span className="c-icon">C</span>;
}

const SKILLS = [
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Java", Icon: DiJava, color: "#E76F00" },
  { name: "C", Icon: CIcon, color: "#A8B9CC" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", Icon: SiExpress, color: "#E9EBF2" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "WordPress", Icon: SiWordpress, color: "#E9EBF2" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

function SkillCard({ name, Icon, color }) {
  return (
    <div className="skill-card">
      <span className="skill-icon-box" style={{ color }}>
        <Icon size={30} />
      </span>
      <span className="skill-name">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skill" className="skills-section">
      <div className="skills-inner">
        <div className="skills-header">
          <h2 className="about-title">
            {/* Tools &amp; Technologies */}
            Skills
            {/* <p className="about-eyebrow">Skills</p> */}
            <span className="title-underline" />
          </h2>
        </div>

        <div className="marquee-row">
          <div className="marquee-track marquee-left">
            {[...SKILLS, ...SKILLS].map((item, i) => (
              <SkillCard key={`${item.name}-${i}`} {...item} />
            ))}
          </div>
        </div>

        <div className="skills-stats">
          <div className="stat-card">
            <p className="stat-number">10+</p>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">15+</p>
            <p className="stat-label">Technologies</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">3+</p>
            <p className="stat-label">Years Coding</p>
          </div>
        </div>

      </div>
    </section>
  );
}