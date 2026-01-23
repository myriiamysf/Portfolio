import './NewBody.css'
import useFadeIn from './useFadeIn';

function NewBody() {
    useFadeIn(); 
    return(
        <div className='comp fade-in'>
            <div id="body" className="BigDiv fade-in">
                <div className="LeftDiv fade-in">
                    <div className="TextOnly fade-in">
                        <div className="firstWords fade-in">
                            <h3>Je suis</h3>
                        </div>

                        <div className="nameWords fade-in">
                            <h1>Mériam <span className='youssef'>YOUSSEF</span></h1>
                        </div>

                        <div className="lastWords fade-in">
                            <h4>Étudiante en <span className='devWords'>Développement Informatique</span></h4>
                        </div>
                    </div>

                    <div className="bubbles fade-in">
                        <div className='logos11'>
                            <img className='logos1' src="mailX.PNG"/>
                            <span className='tootltip1'>meriam84400@gmail.com</span>
                        </div>
                        <div className='logos33'>
                            <img className='logos3' src="telX.PNG"/>
                            <span className='tootltip3'>07 68 60 92 75</span>
                        </div>
                        <div className='logos22'>
                            <a href='https://www.linkedin.com/in/meriam-youssef-33a841332/' target="_blank" rel="noopener noreferrer"><img className='logos2' src="linkedinX.PNG"/></a>
                            <span className='tootltip2'>Linkedin</span>
                        </div>
                        
                        <div className='logos44'>
                            <a href='https://github.com/myriiamysf' target="_blank" rel="noopener noreferrer"><img className='logos4' src="githubX.PNG"/></a>
                            <span className='tootltip4'>Github</span>
                        </div>
                        <div className='lastsentance'>
                            <a href="/CV_Mériam_YOUSSEF.pdf" download>
                              <button>Télécharger mon <span className='CV'>CV</span></button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="kittyCatDiv fade-in">
                    <img src="catCloud2.png" className='kittyCat'/>
                </div>
            </div>
        </div>
    )
}

export default NewBody