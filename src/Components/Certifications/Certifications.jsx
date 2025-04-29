import React from "react";
import "./Certifications.css";
import cert1 from "../../content/Screenshot 2025-04-29 123441.png";
import cert2 from "../../content/Screenshot 2025-04-29 123458.png";
import cert3 from "../../content/Screenshot 2025-04-29 123512.png";
import cert4 from "../../content/Screenshot 2025-04-29 123538.png";
import cert5 from "../../content/Screenshot 2025-04-29 124353.png"; 

const certificates = [
  { id: 1, title: "Apprx. alogrithm and linear programming", image: cert1 },
  { id: 2, title: "GenAI for everyone", image: cert2 },
  { id: 3, title: "Introduction to Gen AI", image: cert3 },
  { id: 4, title: "Prompt Engineering", image: cert4 },
  { id: 5, title: "Explore a Carrer in Front End Web Dev", image: cert5 },
];


const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="certifications-title">My Certifications</h2>
      <div className="certifications-grid">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} />
            <div className="certificate-overlay">
              <p>{cert.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
