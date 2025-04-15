import React from "react";
import "../styles/MysticRoller.css";

const logos = [
  { src: "./images/lgoTS.png", name: "Typescript" },
  { src: "./images/logoJS.png", name: "Javascript" },
  { src: "./images/lgoPython.png", name: "Python" },
  { src: "./images/logoGolang.png", name: "Golang" },
  { src: "./images/logoHTML.png", name: "HTML" },
  { src: "./images/logoCSS.png", name: "CSS" },
  { src: "./images/logoMySQL.png", name: "MySQL" },
  { src: "./images/logoPostgre.png", name: "PostgreSQL" },
  { src: "./images/logoReact.png", name: "ReactJS" },
  { src: "./images/logoNest.png", name: "NestJS" },
  { src: "./images/logoNotion.png", name: "Nation" },
  { src: "./images/logoFigma.png", name: "Figma" },
  { src: "./images/lgoMicrosoftAzur.png", name: "Microsoft Azur" },
  { src: "./images/lgoArduino.png", name: "Arduino" },
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