import { ADD_GUESS, RESTART_GAME } from "./action";

const initialState = {
    history: [],
    answer: Math.floor(Math.random() * 100) + 1,
    displayText: "Make a guess",
    won: false
}

function getHeat(guess, answer) {
    const diff = Math.abs(guess - answer);
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

function isValid(guess) {
    return guess.match(/^$|[^0-9]/) ? false : true;
}

function isAlreadyGuessed(guess, history) {
    return history.find(histObj => guess === histObj.guess) ? true : false
}

export const gameReducer = (state=initialState, action) => {
    if (action.type === ADD_GUESS) {
        const valid = isValid(action.guess),
              alreadyGuessed = isAlreadyGuessed(action.guess, state.history);

        if (valid && !alreadyGuessed) {
            const heat = getHeat(action.guess, state.answer),
                  histObj = {
                                guess: action.guess,
                                heat
                            },
                  displayText = heat !== "Won" ? heat : "You won the game!",
                  won = heat !== "Won" ? false : true;

            return Object.assign(
                                 {},
                                 state,
                                 { history: [ ...state.history, histObj ], displayText, won }
                                );
        } else if (valid && alreadyGuessed) {
            return Object.assign({}, state, { displayText: `You already guessed ${action.guess}`});
        } else {
            return Object.assign({}, state, { displayText: "Please only enter a number"});
        }
    } else if (action.type === RESTART_GAME) {
        return Object.assign({}, initialState, { answer: Math.floor(Math.random() * 100) + 1 });
    }

    return state;
}