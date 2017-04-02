import React from 'react';
import ActionBar from './ActionBar.jsx';
import Hand from './Hand.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { newDeck, deal } from '../lib/cards';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            'playerHand': this.props.state.get('playerHand'),
            'dealerHand': this.props.state.get('dealerHand')
        };

        this.handleDealUpdate = this.handleDealUpdate.bind(this);
    }

    componentDidMount() {

        document.addEventListener("deal:update", this.handleDealUpdate, false);
    }

    componentWillUnmount() {

        document.removeEventListener("deal:update", this.handleDealUpdate, false);
    }

    handleDealUpdate(e) {
        if (e && e.detail) {
	        let cardCount = parseInt(e.detail, 10);

	        if (cardCount > 0 && cardCount < 53) {

		        let deck = newDeck();
		        let playerHand, dealerHand;

		        [deck, playerHand] = deal(deck, cardCount);
		        [deck, dealerHand] = deal(deck, cardCount);

		        this.setState({
			        'playerHand': playerHand,
			        'dealerHand': dealerHand
		        });
	        }
        }
    }

    render() {
        return (
            <div className="app">
                <Header />
                <ActionBar />

                <span className="hand-label">Player's hand</span>
	            <hr />
                <Hand cards={this.state.playerHand} />
                <span className="hand-label">Dealer's hand</span>
	            <hr />
                <Hand cards={this.state.dealerHand} />
                <Footer />
            </div>
        );
    }
};
