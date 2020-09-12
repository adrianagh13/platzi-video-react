import React from  'react';
import { Link } from 'react-router-dom';

import google from '../assets/images/google1.png';
import twitter from '../assets/images/twitter1.png';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="register"> 
        <section className="register__wrapper">
            <h2>Crear una cuenta</h2>
            <form className="register__wrapper--form" action="/">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="register__button">Registrarme</button>
            </form>
            <section className="register__wrapper--social--media">
                <div>
                    <img src={google} alt="" />Registrate con Google
                </div>
                <div>
                    <img src={twitter} alt="" />Regístrate con Twitter
                </div>
            </section>
            <Link to="/login">Inicia sesión</Link>
        </section>
    </section>
);

export default Register;