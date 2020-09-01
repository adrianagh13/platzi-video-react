import React from 'react';

import '../assets/styles/components/Categories.scss'

const Categories = ({ children, title }) => (
    <div className="categories">
        <h2 className="categories__title">{title}</h2>
        {children}
    </div>
);

export default Categories;

//En nuestro componente al recibir en parámetros un prop, al llamarlo evitamos usar el props.prop, simplemente lo llamamos {prop}
//traemos los children del componente, los asignamos en parámetros para no llamarlos desde props, sería : props.children