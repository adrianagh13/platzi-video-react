import React from 'react';
import { Link } from 'react-router-dom';

import twitter from '../assets/images/twitter1.png';
import google from '../assets/images/google1.png';
import '../assets/styles/components/Login.scss';


const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2 tabIndex="0">Inicia Sesión</h2>
            <form className="login__container--form" action="">
                <input aria-label="Correo" className="input" type="text" placeholder="Correo" />
                <input aria-label="Contraseña" className="input" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar sesión</button>
                <div className="login__container--password--det">
                    <label><input type="checkbox" id="cbox" value="checkbox" /> Recuérdame</label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social--media">
                <div><img src={google} alt="" /> Inicia sesión con Google</div>
                <div><img src={twitter} alt="" /> Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">
                ¿No tienes ninguna cuenta? 
                <Link to="/register"> 
                    Regístrate
                </Link>
            </p>
        </section>
    </section>
)

export default Login;