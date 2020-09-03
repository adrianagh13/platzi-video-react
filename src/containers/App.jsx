import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const App = () => {
    const [ videos, setVideos ] = useState([]); //recuerda useState recibe un arreglo de 2 argumentos, una variable para guardar el edo. y una función para manejar el estado, haciendo alusión a state y setState

    useEffect(() => { //useEffect permite al componente suscribirse a su ciclo de vida, recibe 2 parámetros cuyos comportamientos corresponden a componentDidMount y el segundo a componentWillUnmount
        fetch('http://localhost:3000/initialState') //es decir, cuando el componente se renderice, hará el fetch a la api fake
            .then(response => response.json()) //(no debe haber punto y coma, recuerda que response.json retorna OTRA promesa, por eso el then de abajo y el data), manejado con promesas por fetch y response.json, una vez que se obtengan los datos de la api, se gaurdará en response y eso lo parseamos a json
            .then(data => setVideos(data)); //esa data la asignamos al estado con setVideos
    }, []); //una vez que el componente se desmonte, esa data quedará como un array vacio

    console.log(videos);

    return (
        <div className="App">
            <Header />
            <Search />

            <Categories title="Mi Lista"> 
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
        
            <Categories title="Tendencias"> 
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
    
            <Categories title="Recomendaciones"> 
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />

        </div>
    );
}

//cambiamos los paréntesis por llaves para quitar el return explícito y agregar el 'return', y así poder utilizar funciones o lógica dentro del componente

export default App;