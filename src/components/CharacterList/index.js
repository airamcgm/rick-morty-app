import React, { useEffect } from 'react';

import CharacterCard from '../CharacterCard';

import { characterEntries } from '../../redux/CharacterList/selectors';
import { nextUrl, prevUrl } from '../../redux/CharacterList/selectors';
import { fetchCharacterList } from '../../redux/CharacterList/actions';

import { ImSearch } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

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
        fetchCharacterList('page', nextUrlId);
    }
    const previousPage = (page) => {
        var prevUrlId = 0;
        if(page!=null){
            prevUrlId = page.substr(48,page.length);
        };        
        fetchCharacterList('page', prevUrlId);
    }

    const search = () => {
        fetchCharacterList('name', inputValue);
        setInputValue('');
    }
    const clear = () => {
        setInputValue('');
    }

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    };

    return (
        <div className="app_container" >
            <div className="actions_grid">
                <div className='row_2'>
                    <button id="prevButton" className="font_barriecito" onClick={() => previousPage(prevUrl)}><IoIosArrowBack className="arrow_back"/>Previous</button>
                    <button id="nextButton" className="font_barriecito" onClick={() => nextPage(nextUrl)}>Next<IoIosArrowForward className="arrow_forward"/></button>
                </div>
                <div></div>
                <div className="search_grid">
                    <button className='button_search' onClick={() => search()}><ImSearch/></button>
                    <input type="text" placeholder='Search...'  className='input_text' onChange={onChangeHandler} value={inputValue}></input>
                    <button className='button_clear' onClick={() => clear()}><MdClose/></button>
                </div>
                
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