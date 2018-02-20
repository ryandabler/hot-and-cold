import React from 'react';
import PropTypes from "prop-types";
import './guess-form.css';

export default function GuessForm(props) {
    function onSubmit(event) {
        event.preventDefault();
        
        const value = event.target.elements.guess.value.trim();
        event.target.elements.guess.value = "";

        if (value !== "") {
            const response = { value };
            response.status = value.match(/[^0-9]/) ? "invalid" : "valid";
            
            props.onSubmit(response);
        }
    }

    return (
        <form className="guess-form" onSubmit={event => onSubmit(event)}>
            <input name="guess" type="text"
                    aria-label="Enter a number" disabled={props.disableInput} />
            <input type="submit" value="Guess" disabled={props.disableInput} />
        </form>
    );
}

GuessForm.propTypes = {
    disableInput: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
}