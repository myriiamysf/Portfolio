import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
      <div className="navbar">
        <button onClick={() => scrollToSection("intro")}>Intro</button>
        <button onClick={() => scrollToSection("competences")}>Compétences</button>
        <button onClick={() => scrollToSection("experience")}>Expérience</button>
      </div>
    );
  };
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  
  export default Navbar;