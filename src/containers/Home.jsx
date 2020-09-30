import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

// import '../assets/styles/Home.scss' importamos los estilos desde App, para aplicarlos a todas las rutas

//Esta función del componente la usábamos con el custom hook creado, descartamos esto para usar el Store de redux
// const API = 'http://localhost:3000/initialState';

// const Home = () => {
//     // const [videos, categories] = useInitialState(API); inicialización de estado mediante custom
//     console.log(videos); //objeto
//     console.log(categories); //arreglo
//     return (
//         <div className="Home">
//             <Search />
//             {categories.map(category => ( // iteramos sobre el array categories con map, que irá recorriendo cada posición de las categorias
//                 videos[category].length > 0 && ( //SÍ se pueden recorrer las posiciones de los objetos, por lo tanto, si videos (la lista en general) en su posicion [category] tiene un length mayor a 0, entonces que se renderice el componente categories, sino, no se renderiza, ejemplo myList
//                     <Categories key={category} title={category}>  
//                         <Carousel>
//                             {videos[category].map(item => ( //al objeto videos en su posición category le hacemos un map, a cada posición  de la categoría le llamamos item, por cada item renderizamos el CarouselItem
//                                 <CarouselItem key={item.id} {...item} />
//                             ))} 
//                         </Carousel>
//                     </Categories>
//                 )
//             ))}
//         </div>
//     );
// }

const Home = ({ myList, trends, originals, searchResults }) => {

    return (
        <> 
            <Header /> 
            <Search isHome/>

            {myList.length > 0  &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item}
                                isList
                            />    
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem 
                            key={item.id} 
                            {...item}
                        />    
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi">
                <Carousel>
                    {originals.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

// export default Home; ya no exportamos el componente de esta manera porque ahora lo exportamos conectado

export default connect(mapStateToProps, null)(Home);
//export default connect(props, actions)(Component); Recibe el mapeo de los props y  el mapeo de las actions a disparar para ejecutar un reducer, después recibe el componente a conectar

//cambiamos los paréntesis por llaves para quitar el return explícito y agregar el 'return', y así poder utilizar funciones o lógica dentro del componente
//Recuerda que al iterar sobre un array debes de agregarle un key a cada posicion para aumentar su especificidad