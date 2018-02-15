import React from 'react';
import GuessHistoryItem from "./guess-history-item";
import './guess-history.css';

export default function GuessHistory(props) {
    const items = props.history.map(item => <GuessHistoryItem guess={item} />);
    
    return (
        <div>
            {items}
        </div>
    );
}