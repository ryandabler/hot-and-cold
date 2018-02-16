import React from 'react';
import GuessHistoryItem from "./guess-history-item";
import './guess-history.css';

export default function GuessHistory(props) {
    const items = props.history.map(item => <GuessHistoryItem key={item} guess={item} />);
    
    return (
        <div>
            {items}
        </div>
    );
}