import React from 'react';
import Card from './Card.jsx';

export default class Hand extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hand">
                {this.props.cards.map((card, i) =>
                    <Card suit={card.get('suit')}
                          rank={card.get('rank')}
                          key={i} />
                )}
            </div>
        );
    }
};
