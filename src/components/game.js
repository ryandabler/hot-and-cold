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
        const history = [...this.state.history, guess];
        this.setState({
            history
        });
        console.log(guess);
    }

    render() {
        return (
            <div>
                <GuessForm onSubmit={guess => this.addGuess(guess)} />
                <div>Guesses: {this.state.history.length}</div>
                <GuessHistory history={this.state.history}/>
            </div>
        );
    }
}