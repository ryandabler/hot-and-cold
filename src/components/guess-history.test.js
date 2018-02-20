import React from 'react';
import { shallow } from 'enzyme';

import GuessHistory from './guess-history';

describe("<GuessHistory />", () => {
    it("Renders without crashing", () => {
        const history = [ { guess: "3", heat: "Cold" } ];
        shallow(<GuessHistory history={history} />);
    });

    it("Should have 3 history items - warm, cold, hot", () => {
        const history = [ 
            { guess: "3", heat: "Cold" },
            { guess: "25", heat: "Warm" },
            { guess: "50", heat: "Hot" }
        ];
        const wrapper = shallow(<GuessHistory history={history} />);
        expect(wrapper.children().length).toEqual(3);
    });
});