import React from 'react';
import Header from "./header";
import GuessForm from "./guess-form";
import GuessHistory from "./guess-history";

import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            answer: Math.floor(Math.random() * 100) + 1,
            displayText: "Make a guess",
            won: false
        }
    }

    checkValidity(response) {
        response.status === "valid" ? this.addGuess(response.value)
                                    : this.setState( { displayText: "Please only enter a number" } );
    }

    getHeat(guess) {
        const diff = Math.abs(guess - this.state.answer);
        if (diff === 0) {
            return "Won";
        } else if (diff < 10) {
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
            const displayText = guessObj.heat !== "Won" ? guessObj.heat : "You won the game!";
            const won = guessObj.heat === "Won" ? true : false;

            this.setState( { history, displayText, won } );
        }
    }

    restartGame() {
        this.setState({
            history: [],
            answer: Math.floor(Math.random() * 100) + 1,
            displayText: "Make a guess",
            won: false
        });
    }

    render() {
        return (
            <div className="board">
                <Header onRestart={initRestart => this.restartGame()} />
                <section className="game">
                    <p className="top-text">{this.state.displayText}</p>
                    <GuessForm onSubmit={response => this.checkValidity(response)}
                               disableInput={this.state.won} />
                    <p>Guesses: {this.state.history.length}</p>
                    <GuessHistory history={this.state.history}/>
                </section>
            </div>
        );
    }
}