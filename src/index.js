import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './routes/App';
import { initialState } from '../initialState.json';
initialState.user = {};
initialState.playing = {};

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));

//Provider es el elemento que permite que cualquier componente que cumpla con la función connect pueda acceder al Store de React Redux
//Todos los componentes de React se pueden conectar.
//Todo nuestro árbol de componentes debe estar dentro de la etiqueta de Provider para acceder al Store.