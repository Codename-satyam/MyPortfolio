import React from "react";
import "./Projects.css";
import web_name from "./images/web_name.png";
import quick from "./images/quick.png";
import anibuy from "./images/ani.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    title: "Anibuy",
    description:
      "A fully functional e-commerce platform tailored for anime fans, designed to showcase and sell a wide range of anime-themed products such as apparel, collectibles, posters, and accessories.",
    image: anibuy,
    githubLink: "https://github.com/Codename-satyam/AniBuy.io",
  },
  {
    title: "QuickPick",
    description:
      "A user-centric web application designed to streamline the online ordering and delivery of fresh vegetables and essential kitchen supplies. Built to simplify grocery shopping with a clean and intuitive interface for all users..",
    image: quick,
    githubLink: "https://github.com/Codename-satyam/Quickpick",
  },
  {
    title: "Web_Name",
    description:
      "An engaging and educational web application designed to help children assess and enhance their cognitive abilities through fun aptitude and IQ tests. Developed with Laravel to ensure robust backend functionality and smooth user experience.",
    image: web_name,
    githubLink: "Not deployed on any platform yet",
  },
];

const ProjectsShowcase = () => {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">My Projects</h2>
        {projects.map((project, index) => (
          <div
            className={`project-item ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                className="github-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "8px" }}
                />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
