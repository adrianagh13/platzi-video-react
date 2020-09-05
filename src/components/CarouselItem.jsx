import React from 'react';
import PropTypes from 'prop-types';

import play from '../assets/images/play.png';
import plus from '../assets/images/plus.png';
import img from '../assets/images/imagen8.jpeg'
import '../assets/styles/components/CarouselItem.scss';


const CarouselItem = ({ cover, title, year, contentRating, duration }) => ( //asignacion en parametros como props
    <div className="carousel-item">
        <img className="carousel-item__img"src={cover} alt={title} />
        <div className="carousel-item__details">
            <div className="carousel-item__details--imgs"> 
                <img src={play} alt="play" />
                <img src={plus} alt="plus" />
            </div>
            <div className="carousel-item__details--desc">
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string,
    year : PropTypes.number,
    contentRating : PropTypes.string,
    duration: PropTypes.number,
}

//PropTypes es la manera en que podemos indicar a nuestros componentes qué tipo de elemento son los props que recibe: ya sea string, numerico, boolean, etc
//Por regla cuando le indiquemos PropTypes al componente, la p debe ser minúscula
//Por cada prop que recibe el componente, indicamos el tipo de dato S

export default CarouselItem;