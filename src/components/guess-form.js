import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.textInput.value);
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <input ref={input => this.textInput = input} type="text" />
                <input type="submit" value="Guess" />
            </form>
        );
    }
}