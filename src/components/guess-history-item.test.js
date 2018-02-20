import React from 'react';
import { shallow } from 'enzyme';

import GuessHistoryItem from './guess-history-item';

describe("<GuessHistoryItem />", () => {
    it("Renders without crashing", () => {
        shallow(<GuessHistoryItem heat={"Cold"} guess={"1"} />);
    });

    it("Should render cold items", () => {
        const wrapper = shallow(<GuessHistoryItem heat={"Cold"} guess={"1"} />);
        expect(wrapper.hasClass("cold")).toEqual(true);
        expect(wrapper.text()).toEqual("1");
    });

    it("Should render cool items", () => {
        const wrapper = shallow(<GuessHistoryItem heat={"cool"} guess={"10"} />);
        expect(wrapper.hasClass("cool")).toEqual(true);
        expect(wrapper.text()).toEqual("10");
    });

    it("Should render warm items", () => {
        const wrapper = shallow(<GuessHistoryItem heat={"warm"} guess={"15"} />);
        expect(wrapper.hasClass("warm")).toEqual(true);
        expect(wrapper.text()).toEqual("15");
    });

    it("Should render hot items", () => {
        const wrapper = shallow(<GuessHistoryItem heat={"hot"} guess={"19"} />);
        expect(wrapper.hasClass("hot")).toEqual(true);
        expect(wrapper.text()).toEqual("19");
    });

    it("Should render item", () => {
        const wrapper = shallow(<GuessHistoryItem heat={"Won"} guess={"100"} />);
        expect(wrapper.hasClass("won")).toEqual(true);
        expect(wrapper.text()).toEqual("100");
    });
});