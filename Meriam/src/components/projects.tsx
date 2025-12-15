import './projects.css'
import StackIcon from "tech-stack-icons";

function ProjectDiv() {

    interface Stacks {
        logo : string
    }

    interface Project {
        title : string
        img : string
        description : string
        lien : string
        logos? : Stacks[]
    }

    const projects : Project[] = [
        {
            title : "Coko", img:"cokologo.png", description:'Application de mise en relation de chefs et de particuliers', logos:[{logo :"js"}, {logo : "react"}, {logo : "nestjs"}, {logo :'postgresql'}, {logo :'docker'},], lien: "https://github.com/myriiamysf/Coko"
        },
        {
            title : "Etnaflix", img :"EtnaflixIMG.jpg", description:'Application de revues de films, importés depuis la base de données de TMDB. => Fetch API', lien: "https://github.com/myriiamysf/EtnaFlix", logos : [{logo : 'js'}]
        },
        {
            title : "FranceInter", img :"FranceInterIMG.png", description:'Site de détéction de nombre de personnes présents dans une pièce dans un context de pandémie. => APIs azur : vision, text-to-speech, translate', lien: "https://github.com/myriiamysf/FranceInter", logos : [{logo : 'azure'}, {logo : "python"}]
        },
        {
            title : "First Portfolio", img :"firstportfolioIMG.png", description:'Mon premier portfolio.', lien: "https://github.com/myriiamysf/First-Portfolio", logos : [{logo : 'react'}, {logo : "typescript"}]
        },
        
    ]
    return ( 
        <div>
            <div className='projectlist'>
                {projects.map((project, i) => (
                    <div className="card" key={i}>
                       <h3>{project.title}</h3>
                       <a href={project.lien} target='_blank' ><div className='imgDiv'><img className="img" src={project.img}/>
                       <p className='descriptionhover'>{project.description}</p>
                       </div></a>
                       
                       <div className='logodiv'>
                        {project.logos?.map((stack, j) => (
                        <div key={j} className='logodiv'>
                            <StackIcon className="logostack" name={stack.logo}></StackIcon>
                        </div>
                        ))}
                       </div>
                    </div>
                ))}
            </div>
        </div>
    )
} export default ProjectDiv