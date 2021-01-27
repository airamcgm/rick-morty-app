import React, { useEffect } from 'react';

import CharacterCard from '../CharacterCard';

import { characterEntries } from '../../redux/CharacterList/selectors';
import { nextUrl, prevUrl } from '../../redux/CharacterList/selectors';
import { fetchCharacterList } from '../../redux/CharacterList/actions';

import { connect } from 'react-redux';

import "./styles.scss";


const CharacterList = ({ characterListState, fetchCharacterList, nextUrlState, prevUrlState }) => {
    const characterList = characterListState;
    const [inputValue, setInputValue] = React.useState("");
    const nextUrl = nextUrlState;
    const prevUrl = prevUrlState;
 
    useEffect(() => {
        fetchCharacterList();
    }, [fetchCharacterList]);

    const nextPage = (page) => {
        var nextUrlId = 0;
        if(page!=null){
            nextUrlId = page.substr(48,page.length);
        };
        //console.log(nextUrlId)
        fetchCharacterList('page', nextUrlId);
    }
    const previousPage = (page) => {
        var prevUrlId = 0;
        if(page!=null){
            prevUrlId = page.substr(48,page.length);
            console.log(prevUrlId)
        };        
        fetchCharacterList('page', prevUrlId);
    }

    const search = () => {
        fetchCharacterList('name', 'rick');
    }

    const onChangeHandler = event => {
        setInputValue(event.target.value);
        fetchCharacterList('name', inputValue);
        {console.log(inputValue)}
    };

    return (
        <div className="app_container" >
            <div className="actions_grid">
                <button id="prevButton" onClick={() => previousPage(prevUrl)}>Previous</button>
                <input type="text" name="name" onChange={onChangeHandler} value={inputValue}></input>
                <button id="nextButton" onClick={() => nextPage(nextUrl)}>Next</button>
            </div>
            <div className="app_grid">
            {(characterList!="") ? (
                characterList.map((tile, id) => (
                        <CharacterCard character={tile} key={id}/>
                ))
            ): <div>no hay coincidencias</div>}

            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    characterListState: characterEntries(state),
    nextUrlState: nextUrl(state),
    prevUrlState: prevUrl(state),
});
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCharacterList: (parameter,page) => dispatch(fetchCharacterList(parameter, page)),
    //fetchMoreCharacters: ({page}) => dispatch(fetchCharacterList(page))

});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);