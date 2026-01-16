import './home.css'
import TextAnimation from '../components/textAnimated';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return (
    <div className='whole' id='dom'>
      <div className='introDiv'>
        <div className="text-wrapper">
          <TextAnimation/>
        </div>
        <img src="flower.png" alt="flower" className='introLogo'/>
         <button onClick={() => navigate("/body")} className='commencer'>Commencer</button>
      </div>
    </div>
  );
}

export default Home;
