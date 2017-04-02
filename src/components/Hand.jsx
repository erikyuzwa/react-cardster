import React from 'react';
import Card from './Card.jsx';

/**
 * class Hand
 * This component is our collection of Card components. When our Hand is updated via the Parent component, it will
 * iterate through the given Map, and extract the properties needed for each Card component.
 */
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
