//(swiper slider)Slider package install npm i swiper
import React, {useContext} from "react";
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'; 
import ReactMeal from '../../img/ReactMeal.PNG';
import ReactMeal1 from '../../img/ReactMeal1.PNG';
import MusicApp from '../../img/musicapp.png';
import HOC from '../../img/hoc.png';
import 'swiper/css';
import { themeContext } from "../../Context";

const Portfolio = () =>{
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id="Portfolio">
            
            {/* Heading*/}
            <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
            <span>Portfolio</span>

            {/*Slider*/}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={ReactMeal} alt=""/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={ReactMeal1} alt=""/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={MusicApp} alt=""/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={HOC} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;