import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginRequest } from '../actions';
import Header from '../components/Header';

import twitter from '../assets/images/twitter1.png';
import google from '../assets/images/google1.png';
import '../assets/styles/components/Login.scss';


const Login = props => {
    const [form, setValues] = useState({ //hook useState para crear el state form y la función que lo manejará
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
        props.loginRequest(form); //al action  loginRequest le pasamos el form como payload para que los datos ingresados por el usuario guardados en este state sean pasados al Store de Redux
        // console.log(form);
        props.history.push('/'); //props.history.push redirecciona a donde le indiquemos después de que se guarden los datos de form en el store 
    }
    return (
        <>  
            <Header isLogin/> 
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
                        ¿No tienes ninguna cuenta? {''} 
                        <Link to="/register"> 
                            Regístrate
                        </Link>
                    </p>
                </section>
            </section>
        </>
    );
} //el {''} representa un espacio válido para jsx

const mapDispatchToProps = { //Recuerda que mapDispatchToProps se encarga de llevar actions mediante connect y Provider hacia el store de Redux y se agreguen al state mediante reducers
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login); 
//cambiamos de UI component con return explícito a container component para trabajar con lógica