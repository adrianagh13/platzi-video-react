import React from 'react'

import '../assets/styles/components/Header.scss';
import platzi from '../assets/images/platzi.png';
import profile from '../assets/images/usuario.png';

//componente presentacional o UI component
//to select all currances: ctrl+shift+L, selects the marching words

const Header = () => (
    <header className="header">
        <img className="header__img" src={platzi} alt="" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={profile} alt="" />   
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;

