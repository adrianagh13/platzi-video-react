import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="App"> 
        <Header /> 
            {children} 
        <Footer />
    </div>
);
 //Recibe los children que representa a los otros componentes de las rutas para que se rendericen en la posición adecuada
export default Layout;