import React from 'react';
import PropTypes from "prop-types";
import './guess-history-item.css';

export default function GuessHistoryItem(props) {
    const classes = `history-item ${props.heat.toLowerCase()}`;
    return (
        <span className={classes}>{props.guess}</span>
    );
}

GuessHistoryItem.propTypes = {
    heat: PropTypes.string.isRequired,
    guess: PropTypes.string.isRequired
}