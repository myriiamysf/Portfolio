import NewBody from '../components/NewBody'
import SkillsDiv from '../components/competances'
import ProjectDiv from '../components/projects'
import './body.css'

function Body() {
  return (
    <div>
        <div className='bodyDiv'>
          <NewBody/>
        </div>
        <div className='skills'>
          <SkillsDiv/>
        </div>
        <div className='projectplace'>
          <div className='projectext'>
            <h2>Mes projets : </h2>
            <div className='sentance'>
              <p className='insentance'>Voici quelque projets que j'ai pu développer, seule en équipe, durtant ma première année en développement Informatique</p>
            </div>
          </div>
          <div className='projectdiv'>
            <ProjectDiv/>
        </div>
        </div>
    </div>
  );
}

export default Body;