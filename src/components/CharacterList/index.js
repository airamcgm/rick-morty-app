import React, { useEffect } from 'react';

import CharacterCard from '../CharacterCard';

import { characterEntries } from '../../redux/CharacterList/selectors';
import { nextUrl, prevUrl } from '../../redux/CharacterList/selectors';
import { fetchCharacterList } from '../../redux/CharacterList/actions';

import { connect } from 'react-redux';

import "./styles.scss";



const CharacterList = ({ characterListState, fetchCharacterList, nextUrlState, prevUrlState }) => {
    const characterList = characterListState;
    const nextUrl = nextUrlState;
    const prevUrl = prevUrlState;

    useEffect(() => {
        fetchCharacterList();
    }, [fetchCharacterList]);

    const nextPage = (page) => {
        var nextUrlId = 0;
        if(page!=null){
            nextUrlId = page.substr(48,page.length);
        } 
        console.log(nextUrlId)
        fetchCharacterList(nextUrlId);
    }
    const previousPage = (page) => {
        var prevUrlId = 0;
        if(page!=null){
            prevUrlId = page.substr(48,page.length);
        } 
        console.log(prevUrlId)
        fetchCharacterList(prevUrlId);
    }

    return (
        <div className="app_container app_grid" >
            {characterList.map((tile, id) => (
                <CharacterCard character={tile} key={id}/>
            ))}
            <button onClick={() => previousPage(prevUrl)}>Previous</button>
            <button onClick={() => nextPage(nextUrl)}>Next</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    characterListState: characterEntries(state),
    nextUrlState: nextUrl(state),
    prevUrlState: prevUrl(state),
});
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCharacterList: (page) => dispatch(fetchCharacterList(page)),
    //fetchMoreCharacters: ({page}) => dispatch(fetchCharacterList(page))

});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);