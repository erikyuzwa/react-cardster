import React from 'react';

/**
 * class Footer
 * Nothing special here. Just a regular footer component for the app.
 */
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <p>erikyuzwa | 2017 | made with React and &hearts;</p>
            </div>
        );
    }
};
