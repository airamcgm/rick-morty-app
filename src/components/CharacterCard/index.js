import React from 'react';

import "./styles.scss";

const CharacterCard = ({ character }) => {

    return (
        <div className="card font_lato">
            <img className="image" src={character.image} alt={character.name} width="30%"/>
            <div className="column">
                <p className="font_barriecito title">{character.name}</p>
                <p>{character.status} - {character.species}</p>
                {character.type!=""? (<p>Type: {character.type}</p>) : "" }
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
                
            </div>
        </div>
    );
}

export default CharacterCard;