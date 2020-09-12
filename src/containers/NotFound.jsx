import React from 'react';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <section className="error">
        <img className="error__img" src="../images/ghost.png" alt="" />
        <section className="error__container">
            <div className="animated pulse">404</div>
            <h2 className="text">Página no encontrada</h2>
        </section>
    </section>
);

export default NotFound;