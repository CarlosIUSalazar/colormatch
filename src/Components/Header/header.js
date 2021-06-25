import React from 'react';
import './styles.css';
import Logo from '../../Images/logo.png';


export const Header = () => {
    return (
        
        <div>
            <div className="logo"><img src={ Logo }></img></div>
            <h1>Does the meaning of the top word match the ink color of the bottom word?</h1>
        </div>
    )
}

