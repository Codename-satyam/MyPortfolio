import React from "react";
import "./info.css";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiMongodb } from "react-icons/si";
import { BsPersonCheckFill, BsFillPeopleFill, BsChatDotsFill, BsLightbulbFill } from "react-icons/bs";

const technicalSkills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

const socialSkills = [
  { name: "Reliability", icon: <BsPersonCheckFill /> },
  { name: "Consistency", icon: <BsPersonCheckFill /> },
  { name: "Teamwork", icon: <BsFillPeopleFill /> },
  { name: "Communication", icon: <BsChatDotsFill /> },
  { name: "Adaptability", icon: <BsLightbulbFill /> },
  { name: "Problem-Solving", icon: <BsLightbulbFill /> },
  { name: "Creativity", icon: <BsLightbulbFill /> },
];

function Info() {
  return (
    <div className="master-box">
      <div className="box2">
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="skills-box">
          {technicalSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        <h2 className="skills-heading">Social Skills</h2>
        <div className="skills-box">
          {socialSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
