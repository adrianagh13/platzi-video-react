import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import { getVideoSource } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/components/Player.scss';

const Player = props => {
    const { id } = props.match.params; //match.params representa los valores parseados de la url correspondiendo a los segmentos del path, (ruta /player/:id)
    const hasPlaying = Object.keys(props.playing).length > 0;

    useLayoutEffect(() => { //useLayoutEffect es igual a useEffect, sólo que tiene un proceso sincrónico, obtenemos la data de manera organizada por lo tanto no nos redirecciona a 404
        props.getVideoSource(id) //de acuerdo al id que extraemos de props.match.params buscamos en las diferentes listas su data para guardarla en la lista playing
    }, []); //debemos pasar un 2do elemento para evitar un loop infinito
    
    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                    <button type="button" onClick={() => props.history.goBack()}>
                        Regresar
                    </button>
            </div>
        </div>
    ) : <NotFound />;
}; //no olvides ;

const mapStateToProps = state => {
    return {
        playing: state.playing,
    } 
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);