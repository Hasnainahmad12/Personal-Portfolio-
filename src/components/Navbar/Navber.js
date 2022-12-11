import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css';
//react-scroll import
import { Link } from "react-scroll";

const Navber = () =>{
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Hasnain Bangash</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                     
                        <Link spy={true} to='Navber' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>

                        <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                        </Link>

                        <Link spy={true} to='Experiance' smooth={true}>
                        <li>Experiance</li>
                        </Link>

                        
                        <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                        </Link>

                        <Link spy={true} to='Testimonial' smooth={true}>
                        <li>Testimonials</li>
                        </Link>

                    </ul>
                </div>
                <button className="button">Contact</button>
            </div>
        </div>
    )
}

export default Navber;

//smooth scrolling effect
//first you install the scrolling package , then go to your navbar and apply that
//after that you must be assign id of any component in the navbar section component