import React from "react";
import "../styles/competances.css";

const Competances: React.FC = () => {
    return (
        <div className="intro">
                <h1 className="title_section">Mes compétenaces</h1>
                <text className="description">Depuis Septembre 2024, j'ai découvert de nombreux outils informatiques : </text>
                <div className="contenu_align">
                    <div className="contenu_compétances">
                        <div className="titreCadre">
                                <text className="titleLogo">Langages</text>
                            </div>
                    <div className="listeslogo">
                        <div className="tooltip"><img src="lgoTS.png" alt="" className="logo"></img><span className="tooltip-text">TypeScript</span></div>
                        <div className="tooltip"><img src="logoJS.png" alt="" className="logo"></img><span className="tooltip-text">JavaScript</span></div>
                        <div className="tooltip"><img src="logoHTML.png" alt="" className="logo"></img><span className="tooltip-text">HTML</span></div>
                        <div className="tooltip"><img src="logoCSS.png" alt="" className="logo"></img><span className="tooltip-text">CSS</span></div>
                        <div className="tooltip"><img src="lgoPython.png" alt="" className="logo"></img><span className="tooltip-text">Python</span></div>
                        <div className="tooltip"><img src="logoGolang.png" alt="" className="logo"></img><span className="tooltip-text">Golang</span></div>
                    </div>
                        <div className="titreCadre">
                            <text className="titleLogo">Bases de données</text>
                        </div>
                    <div className="listeslogo 2">
                        <div className="tooltip"><img src="logoMySQL.png" alt="" className="logoa a"></img><span className="tooltip-text">MySQL</span></div>
                        <div className="tooltip"><img src="logoPostgre.png" alt="" className="logo"></img><span className="tooltip-text">PostgreSQL</span></div>
                    </div>
                        <div className="titreCadre">
                            <text className="titleLogo">Framework</text>
                        </div>
                    <div className="listeslogo 2">
                        <div className="tooltip"><img src="logoReact.png" alt="" className="logoa a"></img><span className="tooltip-text">React</span></div>
                        <div className="tooltip"><img src="logoNest.png" alt="" className="logo"></img><span className="tooltip-text">NestJS</span></div>
                    </div>
                        <div className="titreCadre">
                            <text className="titleLogo">Outils d'organisation</text>
                        </div>
                    <div className="listeslogo 2">
                        <div className="tooltip"><img src="logoFigma.png" alt="" className="logoa F"></img><span className="tooltip-text">Figma</span></div>
                        <div className="tooltip"><img src="logoNotion.png" alt="" className="logo"></img><span className="tooltip-text">Notion</span></div>
                    </div>
                    </div>
                </div>
                </div>
  );
};

export default Competances;
