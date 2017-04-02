import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Hand from '../../src/components/Hand.jsx';

import { newDeck, deal } from '../../src/lib/cards';

let deck = newDeck();
let hand;

const n = 2;
[deck, hand] = deal(deck, n);

describe('<Hand />', () => {
    const rendered = shallow(<Hand cards={hand} />);
    const cards = rendered.find('Card');

    it('renders correct number of cards', () => {
        expect(cards).to.have.length(n);
    });

    it('gives each card the correct props', () => {
        hand.forEach((card, i) => {
            expect(cards.at(i)).to.have.prop('suit', card.get('suit'));
            expect(cards.at(i)).to.have.prop('rank', card.get('rank'));
        });
    });
});
