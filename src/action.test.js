import { ADD_GUESS, RESTART_GAME, addGuess, restartGame } from './action';

describe("addGuess", () => {
    it("Should return the action", () => {
        const guess = "10";
        const action = addGuess(guess);
        expect(action.type).toEqual(ADD_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe("restartGame", () => {
    it("Should return the action", () => {
        const action = restartGame();
        expect(action.type).toEqual(RESTART_GAME);
    });
});