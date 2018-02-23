import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "./header";
import GuessForm from "./guess-form";
import GuessHistory from "./guess-history";

import './board.css';

export function Board(props) {
    return (
        <div className="board">
            <Header />
            <section className="game">
                <p className="top-text">{props.displayText}</p>
                <GuessForm disableInput={props.won} />
                <p>Guesses: {props.history.length}</p>
                <GuessHistory history={props.history}/>
            </section>
        </div>
    );
}

Board.defaultProps = {
    displayText: "Make a guess",
    won: false,
    history: []
};

Board.propTypes = {
    displayText: PropTypes.string.isRequired,
    won: PropTypes.bool.isRequired,
    history: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
    history: state.history,
    answer: state.answer,
    displayText: state.displayText,
    won: state.won
});

export default connect(mapStateToProps)(Board);