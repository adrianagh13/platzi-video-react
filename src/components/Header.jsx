import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //classnames nos permite crear validaciones

import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.scss';
import platzi from '../assets/images/platzi.png';
import profile from '../assets/images/usuario.png';

//componente presentacional o UI component
//to select all currances: ctrl+shift+L, selects the marching words

const Header = props => {
    const { user, isLogin, isRegister } = props; //destructurando los props de esta manera nos permite solo usar el user sin props.user
    const hasUser = Object.keys(user).length > 0; //object.keys transforma un objeto a un arreglo
    
    const handleLogout = () => {
        props.logoutRequest({});
    }

    const headerClass = classNames('header', { //instanciamos classNames en headerClass, le indicamos que header es el elemento que va a recibir estos props, y el objeto que sigue es para indicar las propiedades que si se cumple con ellas en la instancia de Header en cierto componente container, se aplicarán los estilos que indicamos en header.scss|
        isLogin,
        isRegister,
    });

    return (
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src={platzi} alt="" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ? 
                        <img src={gravatar(user.email)} alt={user.email}/> : 
                        <img src={profile} alt="" />   
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ?
                        <li><Link to="/">{user.name}</Link></li> //si tenemos un user que renderice el nombre del mismo
                        : null //sino , nada
                    }
                    {hasUser ?
                        <li><a href="#" onClick={handleLogout}>Cerrar Sesión</a></li>
                        : <li><Link to="/login">Iniciar Sesión</Link></li>
                    }
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
};

Header.propTypes = {
    user: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

//recuerda que mapStateToProps trae de state los elementos
