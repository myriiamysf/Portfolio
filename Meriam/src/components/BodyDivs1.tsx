import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './bodydiv1.css'



function BodyDiv() {
    const text1 = "Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! Bonjour à tous ! "

    const [textSlide, setTextSlide] = useState(true) 
    
    const text3 ="En 2023, j'ai obtenu mon bac, spécialité mathématiques et anglais avec mention ! Et après je savais pas quoi faire."
    const text4 ="text 4"
    const [textSlide2, setTextSlide2] = useState(true) 
    
    const [show, setShow] = useState(true)
    
const [show2, setShow2] = useState(true)
    return (
        <div>
            <div className='presentation'>
              <div className='pressTitle'>
                <div className='crossfade'>
                  <span className={show ? "visible" : "hidden"}><h2 className='quisuije'>Qui suis-je ?</h2></span>
                  <span className={!show ? "visible" : "hidden"}><h2 className='quisuije'>Me contacter</h2></span>
                </div>
                <button onClick={() => {(setTextSlide(!textSlide)); setShow(!show)}} className='fleche'>▶</button>
              </div>
              <div className='description'>
                <img src='flowers.png' className='flowers'></img>
                <div className='insideDiv'>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={ textSlide ? "text1" : "text2"}
                      initial={{opacity:0, x:-50}}
                      animate={{opacity:1, x:0}}
                      exit={{opacity:0, x:50}}
                      transition={{duration: 0.7}}
                      style={{
                        height: 100,
                        background:"",
                        marginTop: 20,
                        marginLeft: 25,
                        fontSize: "1.3rem",
                      }}
                    >
                      <div>{textSlide ? text1 : 
                        <div className='contactdiv'>
                          <img src='telephone.png'></img>
                          <img src='mail.png'></img>
                          <a href="https://www.linkedin.com/in/meriam-youssef-33a841332/" target="_blank" rel="noopener noreferrer"><img src='linkedin.png' ></img></a>
                           <div><img src='github.png'/> Bientôt</div>
                        </div>
                      }</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div className='parcours'>
              <div className='pressTitle2'>
                <div className='crossfade'>
                  <span className={show2 ?  "visible" : "hidden"}><h2 className='monparcours'>Mon parcours</h2></span>
                  <span className={!show2 ? "visible" : "hidden"}><h2 className='monparcours'>Aujourd'hui</h2></span>
                </div>
                <button onClick={() => {
                  setTextSlide2(!textSlide2); 
                  setShow2(!show2);
                }} className='fleche'>▶</button>
              </div>
              <div className='explication'>
                <div className='insideDiv2'>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={ textSlide2 ? "text3" : "text4"}
                      initial={{opacity:0, x:-50}}
                      animate={{opacity:1, x:0}}
                      exit={{opacity:0, x:50}}
                      transition={{duration: 0.7}}
                      style={{
                        width: 720,
                        height: 100,
                        background:"",
                        margin: 20,
                        fontSize: "1.3rem",
                      }}
                    >
                      <text>{textSlide2 ? text3 : text4}</text>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
        </div>
    )
} 
export default BodyDiv

