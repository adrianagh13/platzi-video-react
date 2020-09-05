import { useState, useEffect } from 'react';

// const useInitialState = (API) => {
//     const [ videos, setVideos ] = useState({ myList:[], trends:[], originals:[] }); //recuerda useState recibe un arreglo de 2 argumentos, una variable para guardar el edo. y una función para manejar el estado, haciendo alusión a state y setState
//     useEffect(() => { //useEffect permite al componente suscribirse a su ciclo de vida, recibe 2 parámetros cuyos comportamientos corresponden a componentDidMount y el segundo a componentWillUnmount
//         fetch(<API></API>) //es decir, cuando el componente se renderice, hará el fetch a la api fake
//             .then(response => response.json()) //(no debe haber punto y coma, recuerda que response.json retorna OTRA promesa, por eso el then de abajo y el data), manejado con promesas por fetch y response.json, una vez que se obtengan los datos de la api, se gaurdará en response y eso lo parseamos a json
//             .then(data => setVideos(data)); //esa data la asignamos al estado con setVideos
//     }, []); //una vez que el componente se desmonte, esa data quedará como un array vacio
//     return videos;
// }

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState({ myList:[], trends:[], originals:[] });
    const [ categories, setCategories ] = useState([]);

    useEffect( () => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setVideos(data);
                setCategories(Object.keys(data)); //object.keys convierte un objeto literal a un arreglo con los keys del objeto que se le pase
            }); //convertimos data a arreglo para asignarlo a categories y así poder iterar sobre el mismo
    }, []);

    return [videos, categories];
}

export default useInitialState;