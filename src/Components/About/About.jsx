import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const images = [
    "https://i.pinimg.com/736x/09/2e/51/092e51754d2bc186fb6e1c5a33229d04.jpg",
    "https://i.pinimg.com/736x/aa/53/ea/aa53ea751287d045691bd87eb186d8cf.jpg",
    "https://i.pinimg.com/736x/73/2e/94/732e94fb7c20cc483246bffc2d0ccc47.jpg",
    "https://i.pinimg.com/736x/a8/7f/8e/a87f8e861062e6e98ab8758930eae805.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section id="about" className="about">
      <div className="king-box">
        <h1>Let me introduce myself</h1>
        <div className="king2-box">
          <div className="king-image">
            <img src={images[currentIndex]} alt="Changing King" />
          </div>
          <div className="king-info">
            <p>
              Hi, I'm Satyam Anand, an aspiring front-end web developer
              passionate about crafting clean and responsive web designs. I have
              experience working with Java, ReactJS, and basic Node.js, and I'm
              always eager to learn and grow in the tech field. Alongside
              coding, I enjoy sketching and gaming, which inspire my creativity
              and focus. As a socially introverted but highly reliable and
              hardworking person, I believe consistency and dedication are key
              to success. I'm excited to continue improving my skills and
              contributing to meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
