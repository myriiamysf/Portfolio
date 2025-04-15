import React from "react";
import "../styles/ProjectGrid2.css";

const projects = [
  {
    id: 1,
    title: "Prime Generator",
    description: "Génération d'un pdf à partir d'une image, d'une prime, et d'un nom.",
    image: "ShanksP.png",
    link: "https://github.com/myriiamysf/Projet-/tree/main/PrimeGenerator",
  },
  {
    id: 2,
    title: "My RPG",
    description: "Petit jeu de rôle basé sur le monde de Zelda.",
    image: "myrpg.png",
    link: "https://github.com/myriiamysf/Projet-/tree/main/My_RPG",
  },
  {
    id: 3,
    title: "Hack the source",
    description: "Projet open source d'un jeu abandonné il y a 13 ans. Ajout d'un menu démarrage.",
    image: "opensource.png",
    link: "https://github.com/myriiamysf/Projet-/tree/main/Hack_The_Source",
  },
];

const Experiencess : React.FC = () => {
    
    return (
      <div className="projects-containerss">
      <div className="projects-gridss">
        {projects.map((project) => (
          <div key={project.id} className="project-cardss">
            <img src={project.image} alt={project.title} className="project-images" />
            <div className="overlays">
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

export default Experiencess;
