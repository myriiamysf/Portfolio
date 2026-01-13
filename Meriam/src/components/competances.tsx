import { useEffect, useState } from "react";
import "./competances.css";

function SkillsDiv() {
  const outerLogos = [
    "nest.PNG",
    "react.PNG",
    "go.PNG",
    "python.PNG",
    "postgre.PNG",
  ];
  const innerLogos = [
    "html.PNG",
    "css.PNG",
    "ts.PNG",
  ];

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setAngle(prev => (prev + 0.5) % 360);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const renderLogos = (logos: string[], radius: number, baseAngle: number) => {
    const angleStep = 360 / logos.length;
    return logos.map((logo, index) => {
      const logoAngle = index * angleStep + baseAngle;
      return (
        <div
          key={index}
          className="orbit-wrapper"
          style={{
            transform: `rotate(${logoAngle}deg) translate(${radius}px)`,
          }}
        >
          <img
            src={logo}
            alt={`logo-${index}`}
            className="orbit-logo"
            style={{ transform: `rotate(${-logoAngle}deg)` }} // logos restent droits
          />
        </div>
      );
    });
  };

  return (
    <div className="wholeskills">
      <div className="leftDiv">
        <div className="skills-container">
          <div className="circle"/>
          <div className="littlecircle"/>
  
          <div className="orbit">
            {renderLogos(outerLogos, 250, angle *1)}
            {renderLogos(innerLogos, 100, -angle * 1)} {/* rotation inverse + plus rapide */}
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <h2 className="parcours">Parcours académique</h2>
        <p>Après l'obtention de mon bac en 2023, je ne savais pas encore quoi faire de ma vie. La voie de l'informatique était une voie 
          qui ne m'avait pas traversé l'esprit. Je n'y connaissais aucune notion. Rentrée 2023, je me lance dans une licence de langue par dépit.
          D'un esprit philosophique, j'y voyais sans doute une manière d'acquérir quelques compétences. 
          <br/>
          <br/>J'avais certainement besoin de développer un peu plus mon esprit mathématique. C'est alors que je me suis rappelée des heures
          passées sur l'ordinateur, à créer et apprendre. Bien qu'il ne s'agissait pas d'informatique au sens strict, j'aimais manipuler les écrans.
          C'est là que ça a commencé à devenir une option pour moi. 
          <br/>
          <br/> C'est alors que je me suis inscrite à l'Etna pour la rentrée 2024. J'ai rapidement compris que c'était ma voie. Tout au long de l'année,
          j'ai créé des projets et découvert de nombreuses technos. 
          <p className="hate">Désormais, je n'ai qu'une hâte : acquérir encore plus de compétances, et me spécialiser dans un domaine.</p>
        </p>
        <img src="flowers.png" className="littleflowers"/>
        <h4>Technos :</h4>
        <div className="ticker">
          <div className="ticker-track">
            <div className="ticker-group">
              <span className="stack">Typescript</span>
              <span className="stack">Python</span>
              <span className="stack">Golang</span>
              <span className="stack">React</span>
              <span className="stack">Nest</span>
              <span className="stack">HTML</span>
              <span className="stack">CSS</span>
              <span className="stack">PostgreSQL</span>
            </div>

            <div className="ticker-group" aria-hidden="true">
              <span className="stack">Typescript</span>
              <span className="stack">Python</span>
              <span className="stack">Golang</span>
              <span className="stack">React</span>
              <span className="stack">Nest</span>
              <span className="stack">HTML</span>
              <span className="stack">CSS</span>
              <span className="stack">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsDiv;
