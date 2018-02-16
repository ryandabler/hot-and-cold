import React from 'react';
import Header from "./header";
import Game from "./game";

import './board.css';

export default function Board() {
    return (
        <div className="board">
            <Header />
            <Game displayText={"Make a guess"} />
        </div>
    );
}