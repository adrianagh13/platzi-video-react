import React from 'react'

import '../assets/styles/components/Search.scss' //al importar archivos no es necesario poner extensiones pero para diferenciar de jsx a scss, ponemos las de scss

const Search = () => (
    <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input className="input" type="text" placeholder="Buscar..." />
    </section>
);

export default Search;