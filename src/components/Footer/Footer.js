import React from "react";
import './Footer.css';
//this is bidefault icons packages you can just install that package and use it, add the icons package (npm i add @iconscout/react-unicons)

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

import Wave from '../../img/wave.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="f-content">
                <span>hasnainbangash03@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/hasnain_bangash_01/">
                    <Insta color='white' size='3rem'/>
                    </a>

                    <a href="https://www.facebook.com/hasnain.hasnainbangash">
                    <Facebook color='white' size='3rem'/>
                    </a>

                    <a href="http://github.com/hasnainahmad12">
                    <Github color='white' size='3rem'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;