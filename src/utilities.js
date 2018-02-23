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

export { getHeat, isValid, isAlreadyGuessed };