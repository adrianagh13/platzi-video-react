import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import twitter from '../assets/images/twitter1.png';
import google from '../assets/images/google1.png';
import '../assets/styles/components/Login.scss';


const Login = () => {
    const [form, setValues] = useState({
        email: '',
    })

    const handleInput = event => {
       setValues({
           ...form,
           [event.target.name] : event.target.value //event.target hace referencia al elemento que llamo al evento, de ese modo podemos obtener el value
       })
    }

    const handleSubmit = event => {
        event.preventDefault(); //evita el reload al hacer submit
        console.log(form);
    }
    return (
        <section className="login">
            <section className="login__container">
                <h2 tabIndex="0">Inicia Sesión</h2> 
                <form className="login__container--form" onSubmit={handleSubmit}> 
                    <input 
                        name="email"
                        aria-label="Correo" 
                        className="input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        aria-label="Contraseña" 
                        className="input" 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
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
    );
}

//cambiamos de UI component con return explícito a container component para trabajar con lógica

export default Login;