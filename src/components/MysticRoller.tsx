import React from "react";
import "../styles/MysticRoller.css";

const logos = [
  { src: "public/lgoTS.png", name: "Typescript" },
  { src: "public/logoJS.png", name: "Javascript" },
  { src: "public/lgoPython.png", name: "Python" },
  { src: "public/logoGolang.png", name: "Golang" },
  { src: "public/logoHTML.png", name: "HTML" },
  { src: "public/logoCSS.png", name: "CSS" },
  { src: "public/logoMySQL.png", name: "MySQL" },
  { src: "public/logoPostgre.png", name: "PostgreSQL" },
  { src: "public/logoReact.png", name: "ReactJS" },
  { src: "public/logoNest.png", name: "NestJS" },
  { src: "public/logoNotion.png", name: "Nation" },
  { src: "public/logoFigma.png", name: "Figma" },
  { src: "public/lgoMicrosoftAzur.png", name: "Microsoft Azur" },
  { src: "public/lgoArduino.png", name: "Arduino" },
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