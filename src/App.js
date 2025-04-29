import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Mainpage from "./Components/Mainpage/MainPage.jsx";
import Info from "./Components/Info/Info.jsx";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Education from "./Components/Education/Education.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Certifications from "./Components/Certifications/Certifications.jsx";

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Mainpage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Info />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <Certifications />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
