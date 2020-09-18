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
    const { id, cover, title, year, contentRating, duration, isList } = props;
    const handleSetFavorite = () => { //handleSetFavorite es la acción que se encargará de mandar la action setFavorites, convierte el elemento en cuestión en un elemento de myList
        props.setFavorite({
            id, cover, title, year, contentRating, duration 
        })
        document.getElementById(id).style.display = 'none';
    }
    const handleDeleteFavorite = (itemId) => { //le debemos pasar el id porque lo evaluamos en las actions
        props.deleteFavorite(itemId) //se ejecuta deleteFavorite al llamarse al handle, y el dispatch la lleva al reducer
        document.getElementById(id).style.display = 'inline';
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
                    {isList ? //isList pertenece a la sección de Lista, por lo tanto estos renders pertenecen a la sección de myList
                        <img //Si la película evaluada es parte de myList, se debe renderizar en la sección de myList el ícono de remove
                            src={rmv} 
                            alt="remove"
                            onClick={() => handleDeleteFavorite(id)} //id viene de los props, sería lo mismo que indicar props.id
                        /> :
                        <img //Si la película evaluada NO es parte de myList, se renderiza el plus en la sección que estemos (tendencias u originales)
                            src={plus} //cuando agreguemos una movie a myList se ejecuta handleSetFavorite, ahí indicamos un display none de esta imagen en la sección que estemos
                            alt="plus"
                            onClick={handleSetFavorite}
                            id={id}
                        />
                    }
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

const mapDispatchToProps = { //mapDispatchToProps es una función que representa el dispatch, estará al pendiente de las actions, mediante la función connect, el dispatcher puede transportar estas actions a la store y que los reducers modifiquen el state
    setFavorite, //setFavorite es el action, lo importamos desde esa carpeta
    deleteFavorite, 
}

export default connect(null, mapDispatchToProps)(CarouselItem);

//PropTypes es la manera en que podemos indicar a nuestros componentes qué tipo de elemento son los props que recibe: ya sea string, numerico, boolean, etc
//Por regla cuando le indiquemos PropTypes al componente, la p debe ser minúscula
//Por cada prop que recibe el componente, indicamos el tipo de dato S