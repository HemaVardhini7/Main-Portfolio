import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import placeholderImg from "../assets/project.jpg";
import "../Styles/style.css"

// Swap in your real project image, description, tags, and links as you finish each one.
const PROJECTS = [
  {
    title: "TaskFlow",
    description:
      "A collaborative task manager with drag-and-drop boards, real-time updates, and team workspaces.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "ShopCart",
    description:
      "A full-stack e-commerce storefront with cart, checkout flow, and an admin dashboard for inventory.",
    tags: ["React", "Express.js", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "WeatherNow",
    description:
      "A clean weather app pulling live forecasts by location, with saved cities and hourly breakdowns.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "DevBlog",
    description:
      "A markdown-powered blogging platform with authentication, comments, and a custom rich-text editor.",
    tags: ["Next.js", "MongoDB", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "FitTrack",
    description:
      "A workout and habit tracker with progress charts, streaks, and weekly goal summaries.",
    tags: ["React", "Figma", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "PortfolioCMS",
    description:
      "A lightweight WordPress theme and admin panel for freelancers to manage their own case studies.",
    tags: ["PHP", "WordPress", "JavaScript"],
    // keep these null/"" ,so it won't be visible when hovered. 
    github: "#", 
    live: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-wrap">
        <img src={placeholderImg} alt={project.title} className="project-image" />
        <div className="project-overlay">
          {project.github && (
            <a href={project.github} className="overlay-link" aria-label="View code">
              <FaGithub size={18} />
              View Code
            </a>
          )}
          {project.live && (
            <a href={project.live} className="overlay-link" aria-label="View live">
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="project" className="projects-section">
      <div className="projects-inner">
        <div className="skills-header">
          <h2 className="about-title">
            Projects
            <span className="title-underline" />
          </h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
