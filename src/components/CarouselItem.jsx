import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setFavorite, deleteFavorite } from '../actions';

import play from '../assets/images/play.png';
import plus from '../assets/images/plus.png';
import img from '../assets/images/imagen8.jpeg'
import rmv from '../assets/images/remove.png'
import '../assets/styles/components/CarouselItem.scss';


const CarouselItem = (props) => {//en parámetros se recibe a props
    const { id, cover, title, year, contentRating, duration } = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration 
        })
    }
    const handleDeleteFavorite = (itemId) => { //le debemos pasar el id porque lo evaluamos en las actions
        props.deleteFavorite(itemId) //se ejecuta deleteFavorite al llamarse al handle, y el dispatch la lleva al reducer
    }
    return ( 
        <div className="carousel-item">
            <img className="carousel-item__img"src={cover} alt={title} />
            <div className="carousel-item__details">
                <div className="carousel-item__details--imgs"> 
                    <img 
                        src={play} 
                        alt="play" 
                    />
                    <img 
                        src={plus} 
                        alt="plus"
                        onClick={handleSetFavorite}
                    />
                    <img 
                        src={rmv} 
                        alt="remove"
                        onClick={() => handleDeleteFavorite(id)} //id viene de los props, sería lo mismo que indicar props.id
                    />
                </div>
                <div className="carousel-item__details--desc">
                    <p className="carousel-item__details--title">{title}</p>
                    <p className="carousel-item__details--subtitle">
                        {`${year} ${contentRating} ${duration}`}
                    </p>
                </div>
            </div>
        </div>
    )
};

CarouselItem.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string,
    year : PropTypes.number,
    contentRating : PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = { //mapDispatchToProps es una función que representa el dispatch, estará al pendiente de las actions 
    setFavorite, //setFavorite es el action, lo importamos desde esa carpeta
    deleteFavorite, 
}

export default connect(null, mapDispatchToProps)(CarouselItem);

//PropTypes es la manera en que podemos indicar a nuestros componentes qué tipo de elemento son los props que recibe: ya sea string, numerico, boolean, etc
//Por regla cuando le indiquemos PropTypes al componente, la p debe ser minúscula
//Por cada prop que recibe el componente, indicamos el tipo de dato S