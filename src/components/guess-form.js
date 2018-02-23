import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGuess } from "../action";

import './guess-form.css';

export function GuessForm(props) {
    return (
        <form className="guess-form"
              onSubmit={e => { e.preventDefault();
                               props.dispatch(addGuess(e.target.elements.guess.value.trim()));
                               e.target.elements.guess.value = "";
                             } }>
            <input name="guess" type="text"
                    aria-label="Enter a number" disabled={props.disableInput} />
            <input type="submit" value="Guess" disabled={props.disableInput} />
        </form>
    );
}

GuessForm.defaultProps = {
    dispatch: () => {},
    disableInput: false
};

GuessForm.propTypes = {
    disableInput: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(GuessForm);