import React from "react";
import './Testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from '../../img/dada.jpeg';
import profilePic2 from '../../img/w.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';

//We can simply import the pagination module, and import css swiper
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
    const clients = [
        {
        img: profilePic1,
        review:
        "Hey I am Malik. I like Your Work. You are a professional React Developer...",
        },

        {
        img: profilePic2,
        review:
        "Hey I am Wasim. I like Your Work. You are a professional React Developer. Keep it up the more good work..",
        },

        {
        img: profilePic3,
        review:
        "Hey I am Rectulla. I very happy of your great work...",
        },

        {
        img: profilePic4,
        review:
        "Hello dear i am SAM. I like Your Work. You are a professional React Developer...",
        }
    ]

    return (
        <div className="t-wrapper" id="Testimonial">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from Me...</span>
            <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
            </div>
     
            {/*Slider , Also use in Pagination module is here, main Swiper class*/}
            <Swiper 
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
                {clients.map((client, index) =>{
                  return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                  );
                })}
                
            </Swiper>
        </div>
        
    )
}

export default Testimonial;