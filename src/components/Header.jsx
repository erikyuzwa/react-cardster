import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h1>Cardster <span className="tagline">an amazing new way to deal cards</span></h1>
            </div>
        );
    }
};