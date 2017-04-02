import React from 'react';
import ActionBar from './ActionBar.jsx';
import Hand from './Hand.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { newDeck, deal } from '../lib/cards';

/**
 * class App
 * Our main component for the application. With the current component structure, UX changes are filtered downwards
 * through children components. In order to deal with value changes to the input control, we're attaching
 * regular event listeners to receive any updates.
 */
export default class App extends React.Component {

    constructor(props) {
        super(props);

        // setup an initial state for each Hand, based on props passed into the component
        this.state = {
            'playerHand': this.props.state.get('playerHand'),
            'dealerHand': this.props.state.get('dealerHand')
        };

        // bind this to our event listener, in order for "this" to reference this component
        this.handleDealUpdate = this.handleDealUpdate.bind(this);
    }

    componentDidMount() {

        document.addEventListener('deal:update', this.handleDealUpdate, false);
    }

    componentWillUnmount() {

        document.removeEventListener('deal:update', this.handleDealUpdate, false);
    }

    // when our deal:update event fires from the input control in the ActionBar, then parse the input
	// and go through the process to update the number of cards dealt to each Hand accordingly.
    handleDealUpdate(e) {
        if (e && e.detail) {
	        let cardCount = parseInt(e.detail, 10);

	        if (cardCount > 0 && cardCount < 53) {

		        let deck = newDeck();
		        let playerHand, dealerHand;

		        [deck, playerHand] = deal(deck, cardCount);
		        [deck, dealerHand] = deal(deck, cardCount);

		        // updating the state for this component will automatically trigger a render()
		        this.setState({
			        'playerHand': playerHand,
			        'dealerHand': dealerHand
		        });
	        }
        }
    }

    // TODO - https://github.com/erikyuzwa/react-cardster/issues/1 - get i18n translation working for our UX labels
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
