import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

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

    it("Should fire callback on form submission", () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm disableInput={false} onSubmit={callback} />);
        wrapper.find("input[type='text']").instance().value = "10";
        wrapper.simulate("submit");
        expect(callback).toHaveBeenCalled();
    });

    it("Should mark malformed input as invalid", () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm disableInput={false} onSubmit={callback} />);
        const response = { value: "10a", status: "invalid" };
        wrapper.find("input[type='text']").instance().value = "10a";
        wrapper.simulate("submit");
        expect(callback).toHaveBeenCalledWith(response);
    });

    it("Should not submit empty input", () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm disableInput={false} onSubmit={callback} />);
        wrapper.find("input[type='text']").instance().value = "";
        wrapper.simulate("submit");
        expect(callback).not.toHaveBeenCalled();
    });
});