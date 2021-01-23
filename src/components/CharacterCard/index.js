import React from 'react';

import { FaHeartbeat } from 'react-icons/fa';
import { GiHumanTarget } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri';
import { MdLocationCity } from 'react-icons/md';
import { SiMicrogenetics } from 'react-icons/Si';
import { TiLocation } from 'react-icons/ti';

import "./styles.scss";

const CharacterCard = ({ character }) => {

    return (
        <div className="card font_lato">
            <div className="column text">
                <p className="font_barriecito title">{character.name}</p>
                <p>{character.status=="Alive"? <FaHeartbeat className="app_color_red"/> : <FaHeartbeat className="app_color_dark_grey"/>}<span>{character.status}</span></p>
                <p>{character.species=="Human"? <GiHumanTarget className="app_color_blue"/> : <RiAliensFill className="app_color_green"/>}<span>{character.species}</span></p>
                {character.type!="" ? <p><SiMicrogenetics className="app_color_purple"/><span>{character.type}</span></p> : "" }
                <p><MdLocationCity className="app_color_dark_grey"/><span>{character.origin.name}</span></p>
                <p><TiLocation className="app_color_dark_grey"/><span>{character.location.name}</span></p>
            </div>
            <img className="image" src={character.image} alt={character.name} width="200px"/>
        </div>
    );
}

export default CharacterCard;