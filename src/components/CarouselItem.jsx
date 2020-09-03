import React from 'react';

import play from '../assets/images/play.png';
import plus from '../assets/images/plus.png';
import img from '../assets/images/imagen8.jpeg'
import '../assets/styles/components/CarouselItem.scss';


const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img"src={img} alt="img" />
        <div className="carousel-item__details">
            <div className="carousel-item__details--imgs"> 
                <img src={play} alt="play" />
                <img src={plus} alt="plus" />
            </div>
            <div className="carousel-item__details--desc">
                <p className="carousel-item__details--title"> Views </p>
                <p className="carousel-item__details--subtitle"> 2020 22 min</p>
            </div>
        </div>
    </div>
);

export default CarouselItem;