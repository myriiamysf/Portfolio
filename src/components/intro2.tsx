import React, { useState } from "react";
import "../styles/intro2.css"

const Intro2 : React.FC = () => {
    const [showText, setShowText] = useState(false);
    return (
        <div className="parent">
            <div className="child">
                <div className="conteneur-contact">
                    <div className="logos">
                        <div className="tooltip"><img src="tel.png" alt="" className="img"></img><span className="tooltiptext">07.68.60.92.75</span></div>
                        <div className="tooltip"><a href="mailto:meriam84400@gmail.com" target="_blank" className="mon-element"><img src="mail.png" alt="" className="img"></img><span className="tooltiptext">meriam84400@gmail.com</span></a></div>
                        <div className="tooltip"><a href="https://www.linkedin.com/in/meriam-youssef-33a841332/" target="_blank" className="mon-element"><img src="in.webp" alt="" className="img"></img></a><span className="tooltiptext">Linkedin</span></div>
                        <div className="tooltip"><a href="https://github.com/myriiamysf" target="_blank" className="mon-element"><img src="git.png" alt="" className="img"></img></a><span className="tooltiptext">Github</span></div>
                    </div>
                </div>
                <div className="text">
                    <div>
                        <h1 className="titre">Bonjour et bienvenue _______</h1>
                        <h2>Mériam Youssef -  Développeuse fullstack</h2>
                        <p>Ceci est mon tout premier portfolio, fabriqué en ReactJS. J'ai 20 ans et cela fait maintenant plusieurs mois que j'ai commencé le développement informatique. Aavant Septembre 2024, je n'avais aucune idée de la concistance de ce domaine. Maintenant, je suis convaincu qu'il s'agit de ma voie. Ce n'est pas toujours simple, mais je persiste, car j'ai la sincère volonté d'acquérir des compétances en dev.  </p>
                        <div className="reveal-container">
                            <button className="reveal-button" onClick={() => setShowText(!showText)}>
                                <div className="apropos">
                                    <span>À propos de moi</span>
                                </div>
                                <span className={`arrowc ${showText ? "open" : ""}`}>▼</span>
                            </button>
                            <div className={`text-box ${showText ? "show" : ""}`}>
                            Tout n’est pas toujours facile (surtout quand le bug vient de l’espace), mais ma motivation tient bon.
                            J’ai une curiosité bien développée – surtout en développement justement – ce qui me pousse à apprendre vite et à toujours vouloir comprendre le "pourquoi du comment".

                            Côté humain, je suis quelqu’un qui communique facilement. J’aime bosser en équipe, échanger des idées, et je n’ai pas peur de prendre la parole quand il faut (promis, sans monopoliser les réunions).
                            Être à l’aise dans un groupe, savoir écouter, expliquer ou poser les bonnes questions, c’est aussi ça qui fait avancer les projets.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro2