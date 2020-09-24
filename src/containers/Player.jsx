import React from 'react';

import '../assets/styles/components/Player.scss';

const Player = props => {
    const { id } = props.match.params; //match.params representa los valores parseados de la url correspondiendo a los segmentos del path, (ruta /player/:id)
    return (
        <div className="Player">
        <base href="/" />
            <video controls autoPlay>
                <source src="/" type="video/mp4" />
            </video>
            <div className="Player-back">
                    <button type="button" onClick={() => props.history.goBack()}>
                        Regresar
                    </button>
            </div>
        </div>
    );
}

export default Player;