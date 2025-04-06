import React from "react";
import "../styles/ProjectGrid.css";

const projects = [
  {
    id: 1,
    title: "Bubble Trouble",
    description: "deux algorithmes de tri : le tri à bulle, et le tri en python.",
    image: "pythonMaths.webp",
    link: "https://github.com/myriiamysf/Projet-/tree/main/Bubble_Trouble/group-1041054-main",
  },
  {
    id: 2,
    title: "ThermOs",
    description: "Un projet de système embarqué avec le langage d'Arduino, pour configurer des ampoules, et des capteurs.",
    image: "Arduino.webp",
    link: "https://github.com/myriiamysf/Projet-/tree/main/ThermOS/group-1044408-main",
  },
  {
    id: 3,
    title: "Task Forge",
    description: "Une API CRUD avec NestJS, à partir d'une base de donnée MariaDB, avec 5 tables et des foreign key.",
    image: "taskForge.png",
    link: "https://github.com/myriiamysf/Projet-/tree/main/TaskForge/group-1044885-main",
  },
];

const Experiences : React.FC = () => {
    
    return (
      <div className="projects-containers">
      <div className="projects-grids">
        {projects.map((project) => (
          <div key={project.id} className="project-cards">
            <img src={project.image} alt={project.title} className="project-images" />
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
