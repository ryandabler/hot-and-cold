import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit(event) {
        event.preventDefault();
        
        const value = event.target.guess.value;
        event.target.guess.value = "";

        const response = { value };
        response.status = value.match(/[^0-9]/) ? "invalid" : "valid";
        
        this.props.onSubmit(response);
    }

    render() {
        return (
            <form className="guess-form" onSubmit={event => this.onSubmit(event)}>
                <input name="guess" type="text"
                       aria-label="Enter a number" disabled={this.props.disableInput} />
                <input type="submit" value="Guess" disabled={this.props.disableInput} />
            </form>
        );
    }
}