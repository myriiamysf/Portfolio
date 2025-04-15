import React from "react";
import "./App.css";
// import Competances from "./components/competances";
import Experiences from "./components/Experiences";
import ProjectsGrid from "./components/ProjectGrid"
import MysticRoller from "./components/MysticRoller"
import Navbar2 from "./components/Navbar2";
import ProjectGrid2 from "./components/ProjectGrid2"
import Intro2 from "./components/intro2";
// import Intro from "./components/intro";


const App: React.FC = () => {

  return (
    <div className="Div">
      <div className="head">
        <Navbar2/>
      </div>

      {/* intro ___________________________________________________________________________ */}
      <section id="presentation">
        <Intro2/>
      </section>
        <a href="#competences" className="arrowa">
          ↓
        </a>
      <div className="linecontainer">
        <div className="line"/>
      </div>
      {/* Compétences ___________________________________________________________________________ */}
      <section id="competences">
        <div className="intro">
          <h1 className="title_section">___Mes compétences___</h1>
        </div>
        <div className="description">
            <text >
              Au cours des mois qui ont précédés, on a pu travailler sur plusieurs projets divers et variés. 
              Pour cela on a apprit à utiliser pas mal d'outils : des langages, des frameworks, des bases de données, des outils
              pour se repérer dans les projets etc ... Tout cela m'a permit d'avoir une idée plus fixe de ce qu'est le developpement informatique,
              moi qui n'en connaissais même pas les fondements. 
            </text>
          </div>
        {/* <Competances/> */}
        <div className="ms">
          <MysticRoller/>
        </div>
      </section>
      <a href="#projet" className="arrow">
        ↓
      </a>
      <div className="linecontainer">
        <div className="line"/>
      </div>
      {/* experience ___________________________________________________________________________ */}
      <section id="projet">
        <div className="intro">
          <h1 className="title_section">___Mes Projets___</h1>
            <div className="description">
              <text >
                Voici 9 exemples de projets que j'ai avons pu réaliser de Septembre 2024 à Avril 2025. Ce sont ceux-ci qui m'ont permis d'acquérir les compétances vu cu-dessus.
              </text>
            </div>
            <Experiences/>
            <ProjectsGrid/>
            <ProjectGrid2/>
        </div>
      </section>
    </div>
  );
};

export default App;
