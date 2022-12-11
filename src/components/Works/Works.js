import React, { useContext} from "react";
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Instagram from '../../img/instagram.png';
import { motion } from "framer-motion";
import { themeContext } from "../../Context";

const Works = () =>{
        // context
        const theme = useContext(themeContext);
        const darkMode = theme.state.darkMode;

    return (
        <div className="works">
              {/*Left side */}
              <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Works for All These</span>
                <span>Brands & clients</span>
                <span>This is my Service, Hey I am hasnain bangash React 
                <br />
                Developer , and also Website Developer.
                <br />
                Developer , and also Website Developer.
                </span>
                
                <button className="s-button">Hire Me</button>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
          
          {/*Right Side */}
          <div className="w-right">
            <motion.div
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: "spring"}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Instagram} alt=""/>
                </div>
            </motion.div>
            
            {/* Background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
          </div>
        </div>
    )
}

export default Works;