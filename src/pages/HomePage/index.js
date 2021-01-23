import React from 'react';
import CharacterList from '../../components/CharacterList';

import './styles.scss';

const HomePage = () => {
    return(
        <div className="app_container_full">
            <CharacterList/>    
        </div>
    )
}

export default HomePage;