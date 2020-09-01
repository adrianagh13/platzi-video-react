import React from 'react';

import '../assets/styles/components/Carousel.scss'

const Carousel = ({ children }) => (
    <section className="carousel">
        <div className="carousel__container">
            {children} 
        </div>
    </section>

);

export default Carousel;

//hacemos asignacion de hijos (children) porque le pasaremos cada uno de los items
//para no llamarlos desde props, los recibimos en los parámetros del componente