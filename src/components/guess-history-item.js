import React from 'react';
import './guess-history-item.css';

export default function GuessHistoryItem(props) {
    return (
        <span className="history-item">{props.guess}</span>
    );
}