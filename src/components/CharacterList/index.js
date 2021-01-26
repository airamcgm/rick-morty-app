import React, { useEffect } from 'react';

import CharacterCard from '../CharacterCard';

import { characterEntries } from '../../redux/CharacterList/selectors';
import { nextUrl } from '../../redux/CharacterList/selectors';
import { fetchCharacterList } from '../../redux/CharacterList/actions';

import { connect } from 'react-redux';

import "./styles.scss";

const CharacterList = ({ characterListState, fetchCharacterList, nextUrlState }) => {
    const characterList = characterListState;
    const nextUrl = nextUrlState;
    var nextUrlId = 0;

    useEffect(() => {
        fetchCharacterList();
    }, [fetchCharacterList]);

    useEffect(() => {
        if(nextUrl!=null){
            console.log('hola',nextUrl)
            nextUrlId = nextUrl.charAt(nextUrl.length - 1)
            console.log('hola',nextUrlId)
        } 
    });

    return (
        <div className="app_container app_grid" >

            {characterList.map((tile, id) => (
                <CharacterCard character={tile} key={id}/>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    characterListState: characterEntries(state),
    nextUrlState: nextUrl(state)
});
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCharacterList: () => dispatch(fetchCharacterList(1))
});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);