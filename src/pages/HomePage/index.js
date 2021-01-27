import React from 'react';
import CharacterList from '../../components/CharacterList';
import NavigationBar from '../../components/NavigationBar';

import './styles.scss';

const HomePage = () => {
    return(
        <div className="app_container_full">
            <NavigationBar/>
            <CharacterList/>    
        </div>
    )
}

export default HomePage;