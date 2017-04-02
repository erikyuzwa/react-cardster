import React from 'react';

/**
 * class Card
 * Our component to display the actual playing card meta. Our handy SASS will take care of the styling, so just
 * pull out our card properties via the props passed into this component.
 */
export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card ${this.props.suit}`}>
                <div className="top-rank">
                    {this.props.rank}
                </div>
                <div className="suit">
                    {this.props.suit}
                </div>
                <div className="bottom-rank">
                    {this.props.rank}
                </div>
            </div>
        );
    }
}
