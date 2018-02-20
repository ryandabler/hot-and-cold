import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './header';

describe("<Header />", () => {
    it("Renders without crashing", () => {
        shallow(<Header />);
    });

    it("Should fire the onRestart callback when clicked", () => {
        const callback = jest.fn();
        const wrapper = mount(<Header onRestart={callback} />);
        wrapper.find(".restart").simulate("click");
        expect(callback).toHaveBeenCalled();
    });
});