import React from 'react';
import './guess-history-item.css';

export default function GuessHistoryItem(props) {
    const classes = `history-item ${props.heat.toLowerCase()}`;
    return (
        <span className={classes}>{props.guess}</span>
    );
}