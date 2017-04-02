import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../src/components/App.jsx';
import { fromJS } from 'immutable';
import { newDeck, deal } from '../../src/lib/cards';

let deck = newDeck();
let playerHand, dealerHand;

[deck, playerHand] = deal(deck, 2);
[deck, dealerHand] = deal(deck, 2);

const state = fromJS({
    deck,
    playerHand,
    dealerHand
});

describe('<App />', () => {
    const rendered = shallow(<App state={state} />);

    it('renders <ActionBar /> component', () => {
        expect(rendered.find('ActionBar')).to.have.length(1);
    });

    it('renders two <Hand /> component', () => {
        expect(rendered.find('Hand')).to.have.length(2);
    });

});
