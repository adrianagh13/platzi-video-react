import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

import '../assets/styles/App.scss'

const App = () => ( //return explícito
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>

);

 //Layout se convierte en el único hijo de Browser Router y en la plantilla base para todas las rutas que estamos renderizando
 //Switch es el único hijo de layout porque en base a esta plantilla va a renderizar todas las rutas

export default App;