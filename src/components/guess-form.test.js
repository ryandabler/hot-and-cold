import React from 'react';
import { shallow, mount } from 'enzyme';

import { addGuess} from "../action";
import { GuessForm } from './guess-form';

describe("<GuessForm />", () => {
    it("Renders without crashing", () => {
        shallow(<GuessForm />);
    });

    it("Should disable inputs if instructed", () => {
        const wrapper = mount(<GuessForm disableInput={true} />);
        const textInput = wrapper.find("input");
        textInput.forEach(input => {
            expect(input.instance().disabled).toEqual(true);
        })
    });

    it("Dispatches addGuess during form submission", () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm disableInput={false} dispatch={dispatch} />);
        wrapper.find("input[type='text']").instance().value = "10";
        wrapper.simulate("submit");
        expect(dispatch).toHaveBeenCalledWith(addGuess("10"));
    });
});