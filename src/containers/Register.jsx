import React, { useState } from  'react';
import { Link } from 'react-router-dom';

import google from '../assets/images/google1.png';
import twitter from '../assets/images/twitter1.png';
import '../assets/styles/components/Register.scss';

const Register = () => { 
    const [form, setValues] = useState({ 
        email: '', 
        name: '', 
        password: ''
    });

    const handleInput = event => {
        setValues({ //setValues establece en nuestro state form los valores que provienen del elemento que tuvo el evento que llamó a esta función
            ...form, 
            [event.target.name]: event.target.value //destructuramos form para pasarle como valores el atributo name del input y el valor que esta recibiendo
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <section className="register"> 
            <section className="register__wrapper">
                <h2>Crear una cuenta</h2>
                <form className="register__wrapper--form" action="/" onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        className="input" 
                        type="text" 
                        placeholder="Nombre" 
                        onChange={handleInput}
                    />
                    <input 
                        name="email"
                        className="input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput} 
                    />
                    <input 
                        name="password"
                        className="input" 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
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
}

export default Register;