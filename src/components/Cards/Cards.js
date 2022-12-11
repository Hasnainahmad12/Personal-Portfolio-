import React from "react";
import './Cards.css';

const Cards = ({emoji, heading, detail, color}) =>{
    return (
        <div className="cards" style={{borderColor: {color}}}>
            <img src={emoji} alt=""/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">Learn More</button>
        </div>
    )
}

export default Cards;