import React,{useContext} from "react";
import './Intro.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy1 from '../../img/boy1.png';
import Crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glassesImoji from '../../img/glassesimoji.png';
import Floatingdiv from "../FoatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
//know we can install framer-motion package (npm i framer-motion)
import {motion} from 'framer-motion';
import { Link } from "react-scroll";


const Intro = () =>{
    
    const transition = {duration: 2, type : 'spring'}

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span  style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
                    <span>Hasnain Bangash</span>
                    <span>React Developer with high level of Experiance in web designing and development, producing the high quality work.</span>
                  
                    <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                    </Link>
                    
                    <div className="i-icons">
                        <a href="http://github.com/hasnainahmad12">                        
                        <img src={github} alt=""/>
                        </a>

                        <a href="https://www.linkedin.com/in/hasnain-bangash-549a15248">
                        <img src={linkedin} alt=""/>
                        </a>
                        
                        <a href="https://www.instagram.com/hasnain_bangash_01/">
                        <img src={Instagram} alt=""/>
                        </a>
                    </div>

                </div>
            </div>
            <div className="i-right">

                   <img src={Vector1} alt=""/> 
                   <img src={Vector2} alt=""/> 
                   <img src={boy1} alt=""/>
                   
                   {/*Animation , first motion apply*/}
                   <motion.img
                   initial={{left: '-36%'}}
                   whileInView={{left: '-24%'}}
                   transition={transition} 
                   src={glassesImoji} alt=""
                   /> 
                   
                   <motion.div
                   initial={{top: '-4%', left: '74%'}}
                   whileInView={{left: '68%'}}
                   transition={transition} 
                   
                   style={{top: '-4%' , left: '68%'}}
                   className='floating-div'
                   >
                    <Floatingdiv image={Crown} txt1='Web' txt2='Developer'/>
                   </motion.div>
                   
                   <motion.div
                   initial={{left: '9rem', top: '18rem'}}
                   whileInView={{left: '0rem'}}
                   transition={transition}

                   style={{top: '18rem', left: '0rem'}}
                   className='floating-div'
                   >
                    <Floatingdiv image={thumbup} txt1='Best Development' txt2='Award'/>
                   </motion.div>

                   {/*This is also a Blur Div*/}
                   <div className="blur" style={{ background: "rgb(238 210 255)"}}></div>
                   
                   <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                   }}
                   ></div>
            </div>
        </div>
    )
}

export default Intro;