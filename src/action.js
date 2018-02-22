export const ADD_GUESS = "ADD_GUESS";
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});

export const RESTART_GAME = "RESTART_GAME";
export const restartGame = () => ({ type: RESTART_GAME });