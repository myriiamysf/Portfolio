import React from "react";
import "../styles/intro.css";
import { useState } from "react";
import Contact from "../components/contacts";

const Intro : React.FC = () => {

      const [isOpen1, setIsOpen1] = useState(false);
      const [isOpen2, setIsOpen2] = useState(false);
      const text = "Mériam Youssef";
    
    return (
    <div className="intro">
            <text className="title_section"></text>
            <div className="contenu_intro">
                <div className="contactBorder">
                <Contact  />
                </div>
                <img src="moi.jpg" alt="Meriam Youssef" className="moi" />
                <div className="container_name">
                <h1 className="name">
                {text.split("").map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
                </h1>
                </div>
            </div >
            <div className="description">
                <text >
                Bonjour à tous, et bienvenue sur mon portfolio. ☺️ J'ai 19 ans, et j'a commencé des études en développement informatique en Septembre 2024. Cette discipline alors inconnu pour moi, fut une bonne découverte. Pleine de créativitée et soucieuse de satisfaire des services, l'informatique fait naître en moi une soif d'apprendre, même si ce n'est pas toujours facile.
                </text>
            </div>
            <text className="question">Voudriez-vous en savoir plus sur moi ?</text>
            <div className="toggle-wrapper">
                {/* Premier bloc */}
                <div className="toggle-container a">
                <button className="toggle-button" onClick={() => setIsOpen1(!isOpen1)}>
                    {isOpen1 ? "Masquer" : "Ma personnalité"} 
                </button>
                <div className={`toggle-text ${isOpen1 ? "open" : ""}`}>
                    <p>Je suis quelqu'un d'assez extravertis. En général, j'arrives m'exprimer facilement sur pas mal de sujets. 
                    Je suis quelqu'un qui communique beaucoup, et qui est soucieuse de bien faire.
                    Cela peut être un atout dans les treavaux de groupe. Je fais de mon mieux pour comprendre la logique de l'informatique, 
                    quand bien même cela s'avère être parfois difficile. Je persévère car c'est que comme ça qu'on apprend, même si l'impatience se fait parfois un peu ressentir. </p>
                </div>
                </div>

                {/* Deuxième bloc */}
                <div className="toggle-container a">
                <button className="toggle-button" onClick={() => setIsOpen2(!isOpen2)}>
                    {isOpen2 ? "Masquer" : "Mes expériences pro"} 
                </button>
                <div className={`toggle-text ${isOpen2 ? "open" : ""}`}>
                    <p>J’ai eu plusieurs expériences variées qui m’ont permis de développer différentes compétences. J’ai fait un stage chez une opticienne où je m’occupais de la gestion des commandes des clients. 
                    Pendant deux ans, j’ai aussi fait du babysitting pour deux familles, ce qui m’a appris la patience et la responsabilité. En parallèle, j’ai obtenu mon permis de conduire ainsi que le BAFA. 
                    J’ai également travaillé dans la restauration pendant quelques mois en 2022/2023, en faisant du service une fois par semaine.</p>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Intro;