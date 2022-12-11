import React, {useContext} from "react";

import './Services.css';
import HeartEmogi from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Cards from "../Cards/Cards";
import { themeContext } from "../../Context";
import New from '../Services/New CV.pdf';
//import animtion library
import { motion } from "framer-motion";

const Services = () =>{
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

    return (
        <div className="services" id="Services">
            {/*Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Services</span>
                <spane>This is my Service, Hey I am hasnain bangash React 
                <br />
                Developer , and also Website Developer.
                </spane>

                <a href={New} download>  
                <button className="s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/*Right side Div*/}
            <div className="card">
                {/*first card */}  
                <motion.div
                initial={{left: '25rem'}}
                whileInView={{left: '14rem'}}
                transition={transition}
                >
                    <Cards 
                        emoji= {HeartEmogi}
                        heading= {'Design'}
                        detail = {"Figma Design, Adobe Illustrator, Adobe Photoshop"}
                    />
                </motion.div>

                {/*second card*/}
                <motion.div 
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                >
                    <Cards 
                        emoji= {Glasses}
                        heading= {'Web Development'}
                        detail = {"Html5, Css3, Tailwind, Bootstrap, JS, ReactJS, NodeJS, ExpressJS "}
                    />
                </motion.div>

                
                {/*third card*/}
                <motion.div
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                >
                    <Cards 
                        emoji= {Humble}
                        heading= {'Programming'}
                        detail = {"C++ ,  JavaScript , Java  ,"}
                    />
                </motion.div>

            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    )
}

export default Services;
