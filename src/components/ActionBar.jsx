import React from 'react';

/**
 * class ActionBar
 * This is our UX interface for letting the user update how many cards are dealt via the form input controls.
 * Since we're a child component of the App component, I experimented with using a simple .dispatchEvent()
 * to trigger an update back up the chain.
 */
export default class ActionBar extends React.Component {

    constructor(props) {
        super(props);

        // setup our initial state
        this.state = {
            numberOfCardsToDeal: 1
        };

        this.handleClickDeal = this.handleClickDeal.bind(this);
        this.handleChangeCardsToDeal = this.handleChangeCardsToDeal.bind(this);
    }

    handleChangeCardsToDeal(e) {
        this.setState({numberOfCardsToDeal: e.target.value});
    }

    handleClickDeal(e) {

        // create a custom event, making sure to send our numberOfCardsToDeal in the "detail" key of the
        // event payload
        let event = new CustomEvent('deal:update', {'detail': this.state.numberOfCardsToDeal});
        if (event) {
            document.dispatchEvent(event);
        }
    }

    // TODO - https://github.com/erikyuzwa/react-cardster/issues/1 - get i18n translation working for our UX labels
    render() {
        return (
            <div className="actionbar">
                <div className="row">
                    <div className="col-xs-6">
                        <p>Enter the number of cards to deal.</p>
                    </div>
                    <div className="col-xs-6">
                        <form className="form-inline">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                value={this.state.numberOfCardsToDeal}
                                onChange={this.handleChangeCardsToDeal}
                              />
                              <span className="input-group-btn">
                                 <button type="button" className="btn btn-default" onClick={this.handleClickDeal}>Deal</button>
                              </span>
                            </div>
                          </div>
                        </form>
                    </div>

                </div>
                <hr />
            </div>
        );
    }
};
