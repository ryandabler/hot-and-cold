import React from 'react';
import GuessForm from "./guess-form";
import GuessHistory from "./guess-history";

import './game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            answer: 25
        }
    }

    addGuess(guess) {
        if (this.state.history.includes(guess)) {

        } else {
            const history = [...this.state.history, guess];
            this.setState({
                history
            });
        }
    }

    render() {
        return (
            <div className="game">
                <p className="top-text">{this.props.displayText}</p>
                <GuessForm onSubmit={guess => this.addGuess(guess)} />
                <p>Guesses: {this.state.history.length}</p>
                <GuessHistory history={this.state.history}/>
            </div>
        );
    }
}