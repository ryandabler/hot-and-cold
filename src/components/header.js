import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <div className="header">
            <span>Help</span>
            <span onClick={() => props.onRestart()} className="restart">Restart</span>
        </div>
    );
}