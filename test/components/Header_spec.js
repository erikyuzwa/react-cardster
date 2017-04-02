import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../../src/components/Header.jsx';

describe('<Header />', () => {
    const rendered = shallow(<Header />);

    it('exist', () => {
        expect(rendered).to.exist;
    });
});
