import React from 'react';
import GuessForm from "./guess-form";
import GuessHistory from "./guess-history";

import './game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            answer: 25,
            displayText: props.displayText
        }
    }

    checkValidity(response) {
        response.status === "valid" ? this.addGuess(response.value)
                                    : this.setState( { displayText: "Please only enter a number" } );
    }

    getHeat(guess) {
        const diff = Math.abs(guess - this.state.answer);
        if (diff < 10) {
            return "Hot";
        } else if (diff < 20) {
            return "Warm";
        } else if (diff < 30) {
            return "Cool";
        } else {
            return "Cold";
        }
    }

    addGuess(guess) {
        if (this.state.history.find(histObj => guess === histObj.guess)) {
            this.setState( { displayText: `You already guessed ${guess}` } );
        } else {
            const guessObj = { guess, heat: this.getHeat(guess) };
            const history = [...this.state.history, guessObj];
            this.setState({
                history,
                displayText: guessObj.heat
            });
        }
    }

    render() {
        return (
            <div className="game">
                <p className="top-text">{this.state.displayText}</p>
                <GuessForm onSubmit={response => this.checkValidity(response)} />
                <p>Guesses: {this.state.history.length}</p>
                <GuessHistory history={this.state.history}/>
            </div>
        );
    }
}