import React from 'react';
import { shallow, mount } from 'enzyme';

import Board from './board';

describe("<Board />", () => {
    it("Renders without crashing", () => {
        shallow(<Board />);
    });

    it("Can start a new game", () => {
        const wrapper = shallow(<Board />);
        wrapper.setState({
            history: [{
                guess: "10",
                heat: "Hot"
            }, {
                guess: "50",
                heat: "Cold"
            }],
            answer: 101,
            displayText: "Please only enter a number"
        });

        expect(wrapper.state("history")).not.toEqual([]);
        expect(wrapper.state("answer")).toEqual(101);
        expect(wrapper.state("displayText")).toEqual("Please only enter a number");

        wrapper.instance().restartGame();

        expect(wrapper.state("history")).toEqual([]);
        expect(wrapper.state("answer")).not.toEqual(101);
        expect(wrapper.state("displayText")).toEqual("Make a guess");
    });

    it("Correctly indicates hot or cold", () => {
        const wrapper = shallow(<Board />);
        const guesses = [0, 9, 19, 29, 39];
        const heats = ["Won", "Hot", "Warm", "Cool", "Cold"];
        wrapper.setState({ answer: 0 });
        guesses.forEach((guess, index) => {
            const heat = wrapper.instance().getHeat(guess);
            expect(heat).toEqual(heats[index]);
        });
    });

    it("Indicates if a number has already been guessed", () => {
        const wrapper = shallow(<Board />);
        const answer = { heat: "hot", guess: "10" };
        wrapper.setState({ history: [ answer ] });
        wrapper.instance().addGuess("10");
        expect(wrapper.state("displayText")).toEqual("You already guessed 10");
    });

    it("Indicates when the game is won", () => {
        const wrapper = shallow(<Board />);
        wrapper.setState({ answer: "10" });
        wrapper.instance().addGuess("10");
        expect(wrapper.state("displayText")).toEqual("You won the game!");
        expect(wrapper.state("won")).toEqual(true);
    });
});