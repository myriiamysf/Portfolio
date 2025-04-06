import React from "react";
import "../styles/MysticRoller.css";

const logos = [
  { src: "lgoTS.png", name: "Typescript" },
  { src: "logoJS.png", name: "Javascript" },
  { src: "lgoPython.png", name: "Python" },
  { src: "logoGolang.png", name: "Golang" },
  { src: "logoHTML.png", name: "HTML" },
  { src: "logoCSS.png", name: "CSS" },
  { src: "logoMySQL.png", name: "MySQL" },
  { src: "logoPostgre.png", name: "PostgreSQL" },
  { src: "logoReact.png", name: "ReactJS" },
  { src: "logoNest.png", name: "NestJS" },
  { src: "logoNotion.png", name: "Nation" },
  { src: "logoFigma.png", name: "Figma" },
  { src: "lgoMicrosoftAzur.png", name: "Microsoft Azur" },
  { src: "lgoArduino.png", name: "Arduino" },
];

const MysticRoller: React.FC = () => {
  return (
    <div className="mystic-roller-container">
      <div className="mystic-roller-fade mystic-roller-left" />
      <div className="mystic-roller-track">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="mystic-roller-item">
            <img src={logo.src} alt={logo.name} className="mystic-logo-img" />
            <p className="mystic-logo-text">{logo.name}</p>
          </div>
        ))}
      </div>
      <div className="mystic-roller-fade mystic-roller-right" />
    </div>
  );
};

export default MysticRoller;