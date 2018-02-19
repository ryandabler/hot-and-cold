import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <div className="header">
            <span>Help</span>
            <span onClick={event => props.onRestart(true)} className="restart">Restart</span>
        </div>
    );
}