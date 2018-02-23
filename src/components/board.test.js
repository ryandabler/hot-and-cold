import React from 'react';
import { shallow } from 'enzyme';

import { Board } from './board';

describe("<Board />", () => {
    it("Renders without crashing", () => {
        shallow(<Board />);
    });
});