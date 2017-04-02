import React from 'react';

/**
 * class Header
 * Just a basic header component for the app.
 */
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // TODO - https://github.com/erikyuzwa/react-cardster/issues/1 - get i18n translation working for our UX labels
    render() {
        return (
            <div className="header">
                <h1>Cardster <span className="tagline">an amazing new way to deal cards</span></h1>
            </div>
        );
    }
};