import React from 'react'
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';
import platzi from '../assets/images/platzi.png';
import profile from '../assets/images/usuario.png';

//componente presentacional o UI component
//to select all currances: ctrl+shift+L, selects the marching words

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={platzi} alt="" />
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={profile} alt="" />   
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/">Cuenta</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;

