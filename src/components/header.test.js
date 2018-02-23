import React from 'react';
import { shallow, mount } from 'enzyme';

import { Header } from './header';

describe("<Header />", () => {
    it("Renders without crashing", () => {
        shallow(<Header />);
    });

    it("Dispatches onRestart when clicked", () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Header dispatch={dispatch} />);
        wrapper.find(".restart").simulate("click");
        expect(dispatch).toHaveBeenCalled();
    });
});