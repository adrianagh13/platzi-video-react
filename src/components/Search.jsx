import React from 'react'
import classNames from 'classnames';
import { connect } from 'react-redux';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

import { getVideoSearch } from '../actions';

import '../assets/styles/components/Search.scss' 

const Search = props => { 

    const { isHome, searchResults } = props;

    const inputStyle = classNames('input', {
        isHome,
    })

    const handleChange = event => {
        if(event.key === 'Enter'){
            getVideoSearch(event.target.value); 
        }
    };

    console.log(`results: ${searchResults} `);

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input 
                className={inputStyle} 
                type="text" 
                placeholder="Buscar..." 
                onKeyUp={handleChange}
            /> 

            {
                Object.keys(searchResults).length > 0 && (
                    <Categories title="Resultados de la búsqueda">
                        <Carousel>
                            {searchResults.map(item =>
                                <CarouselItem 
                                key={item.id}
                                {...item}
                                />    
                                )}
                        </Carousel>
                    </Categories>
                )
            }
        </section>
    );
}; 

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
    }
};

const mapDispatchToProps = {
    getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);