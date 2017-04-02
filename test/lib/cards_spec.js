import { expect } from 'chai';
import { List } from 'immutable';

import { newDeck, deal, shuffle } from '../../src/lib/cards';

describe('cards.js', () => {

    describe('deal()', () => {
        const deck = newDeck();
        const n = 5;
        const [new_deck, new_hand] = deal(deck, n);

        it('returns smaller deck', () => {
            expect(new_deck.size).to.equal(52 - n);
        });

        it('returns hand of n cards', () => {
            expect(new_hand.size).to.equal(n);
        });

        it('puts correct cards in hand', () => {
            for(let i = n-1; i >= 0; i--) {
                expect(new_hand.get(i)).to.equal(deck.get(51-(n-1)+i));
            }
        });
    });

    describe('newDeck', () => {
        it('returns an immutable list', () => {
            expect(newDeck()).to.be.instanceOf(List);
        });
        it('has 52 elements', () => {
            expect(newDeck().size).to.equal(52);
        });
    });

    describe('shuffle', () => {
    	const deck = newDeck();
    	it('has 52 elements', () => {
    		expect(deck.size).to.equal(52);
	    });

    	it('has unordered elements', () => {
    		expect(deck.get(0)).to.not.equal(deck.get(1));
	    });
    });

});
