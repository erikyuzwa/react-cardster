import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from '../../src/components/Footer.jsx';

describe('<Footer />', () => {
    const rendered = shallow(<Footer />);

    it('exist', () => {
        expect(rendered).to.exist;
    });
});
