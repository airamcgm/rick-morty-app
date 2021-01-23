import React, { useEffect }from 'react';

import { characterEntries } from '../../redux/CharacterList/selectors';
import { nextUrl } from '../../redux/CharacterList/selectors';
import { fetchCharacterList } from '../../redux/CharacterList/actions';

import { connect } from 'react-redux';

import "./styles.scss";

const CharacterList = ({ characterListState, fetchCharacterList, nextUrlState }) => {

    useEffect(() => {
        fetchCharacterList();
    }, [fetchCharacterList]);

    const characterList = characterListState;
    const nextUrl = nextUrlState;

    return (
        <div className="app_container" >
        {console.log(characterList)}
        {console.log(nextUrl)}
            Grid component works!
        </div>
    );
}

const mapStateToProps = (state) => ({
    characterListState: characterEntries(state),
    nextUrlState: nextUrl(state)
});
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCharacterList: () => dispatch(fetchCharacterList())
});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);