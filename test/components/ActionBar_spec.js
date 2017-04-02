import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ActionBar from '../../src/components/ActionBar.jsx';

describe('<ActionBar />', () => {

    const rendered = shallow(<ActionBar />);

    it('exist', () => {
        expect(rendered).to.exist;
    });

});
