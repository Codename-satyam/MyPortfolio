import React from "react";
import "./Education.css";

const academicData = [
  {
    title: "Matriculation - 85%",
    duration: "2020 - 2021",
    description: "Completed my higher secondary education with a focus on science and mathematics.",
  },
  {
    title: "Intermediate Score-80%",
    duration: "2021 - 2022",
    description: "Completed my intermediate education with a focus on science and mathematics.",
  },
  {
    title: "B.Tech",
    duration: "2022 - Present",
    description: "Pursuing B.Tech in Computer Science, learning core subjects like DSA, OS, DBMS, and web development.",
  },
];

const AcademicTimeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Academic Timeline</h2>
      <div className="timeline">
        {academicData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="content-box">
              <h3>{item.title}</h3>
              <span className="duration">{item.duration}</span>
              <p>{item.description}</p>
            </div>
            <span className="circle1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicTimeline;
