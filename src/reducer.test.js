import { addGuess, restartGame } from './action';
import { gameReducer } from "./reducer";

describe("addGuess", () => {
    it("Should add a valid guess", () => {
        let state = {
            history: [],
            answer: 50,
            displayText: "Make a guess",
            won: false
        };
        state = gameReducer(state, addGuess("10"));
        state = gameReducer(state, addGuess("30"));
        expect(state).toEqual({
            history: [
                {
                    guess: "10",
                    heat:  "Cold"
                }, {
                    guess: "30",
                    heat: "Cool"
                }
            ],
            answer: 50,
            displayText: "Cool",
            won: false
        });
    });

    it("Should not add invalid guesses", () => {
        let state = {
            history: [],
            answer: 50,
            displayText: "Make a guess",
            won: false
        };
        state = gameReducer(state, addGuess("30a"));
        expect(state).toEqual({
            history: [],
            answer: 50,
            displayText: "Please only enter a number",
            won: false
        });
    });

    it("Should not add duplicate guesses", () => {
        let state = {
            history: [],
            answer: 50,
            displayText: "Make a guess",
            won: false
        };
        state = gameReducer(state, addGuess("30"));
        state = gameReducer(state, addGuess("30"));
        expect(state).toEqual({
            history: [
                {
                    guess: "30",
                    heat: "Cool"
                }
            ],
            answer: 50,
            displayText: "You already guessed 30",
            won: false
        });
    });

    it("Should indicate a winning guess", () => {
        let state = {
            history: [],
            answer: 50,
            displayText: "Make a guess",
            won: false
        };
        state = gameReducer(state, addGuess("50"));
        expect(state).toEqual({
            history: [
                {
                    guess: "50",
                    heat: "Won"
                }
            ],
            answer: 50,
            displayText: "You won the game!",
            won: true
        });
    });
});

describe("restartGame", () => {
    it("Should restart the game", () => {
        let state = {
            history: [
                {
                    guess: "10",
                    heat:  "Cold"
                }, {
                    guess: "30",
                    heat: "Cool"
                }
            ],
            answer: 50,
            displayText: "Cool",
            won: false
        };
        
        state = gameReducer(state, restartGame());
        expect(state).toEqual({
            history: [],
            answer: state.answer,
            displayText: "Make a guess",
            won: false
        });
    });
});