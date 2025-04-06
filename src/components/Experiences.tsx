import React from "react";
import "../styles/Experiences.css";

const projects = [
  {
    id: 1,
    title: "IntervenGo",
    description: "Une API en backend et un frontend permettant d'assigner des techniciens à des tâches. Avec PostgreSQL, NestJS, ReactJS et générateur de PDF.",
    image: "IntervenGoCapture.png",
    link: "https://github.com/myriiamysf/Projet-/tree/main/IntervenGo",
  },
  {
    id: 2,
    title: "FranceInter",
    description: "API faite à l'aide d'autres API issu de Microsoft Azur => Une API vision analysant des images, une API text-to-speech, et une API transalte.",
    image: "neuf.jpg",
    link: "https://github.com/myriiamysf/Projet-/tree/main/France-Inter/group-1045983-main",
  },
  {
    id: 3,
    title: "My moovie app",
    description: "Un jeu 2D inspiré de mes jeux d'enfance.",
    image: "MyMoovieApp.jpg",
    link: "https://github.com/myriiamysf/Projet-/tree/main/MyMoovieApp/group-1043972-main",
  },
];

const Experiences : React.FC = () => {
    
    return (
      <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir sur GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Experiences;
