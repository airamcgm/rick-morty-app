import React from 'react';

import Image from '../AppImage';

import './styles.scss';

const NavigationBar = () => {

    return (
        <div className="bg_nav">
            <nav className="app_navigation_bar app_container">
                
                <div className="app_logo_letras">
                    <Image src="letras.png" className="app_logo_letras"/>
                </div>
                <div className="app_logo">
                    <Image src="rickmorty.png" className="app_logo_img"/>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;