import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="App">  
        {/* <Header />  */} 
        {children} 
        <Footer />
    </div>
); //sacamos Header de Layout porque le pasamos validaciones dependiendo de la página container en la que se encuentre, por ello pasamos Header a cada componente

 //Recibe los children que representa a los otros componentes de las rutas para que se rendericen en la posición adecuada
export default Layout;