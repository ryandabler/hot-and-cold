import React from 'react';
import Header from "./header";
import Game from "./game";

import './board.css';

export default function Board() {
    return (
        <div>
            <Header />
            <Game />
        </div>
    );
}