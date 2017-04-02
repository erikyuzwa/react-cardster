import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';

import App from './components/App.jsx';
import { newDeck, deal } from './lib/cards';

require('./css/main.scss');

let deck = newDeck();
let playerHand, dealerHand;

[deck, playerHand] = deal(deck, 2);
[deck, dealerHand] = deal(deck, 2);

const state = fromJS({
    deck,
    playerHand,
    dealerHand
});

ReactDOM.render(
    <App state={state} />,
    document.getElementById('root')
);
