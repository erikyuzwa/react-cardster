import React from 'react';

export default class ActionBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfCardsToDeal: 0
        };

        this.handleClickDeal = this.handleClickDeal.bind(this);
        this.handleChangeCardsToDeal = this.handleChangeCardsToDeal.bind(this);
    }

    handleChangeCardsToDeal(e) {
        this.setState({numberOfCardsToDeal: e.target.value});
    }

    handleClickDeal(e) {

        // create the event
        let event = new CustomEvent('deal:update', {'detail': this.state.numberOfCardsToDeal});

        document.dispatchEvent(event);
    }

    render() {
        return (
            <div className="actionbar">
                <div className="row">
                    <div className="col-xs-6">
                        <p>Enter the number of cards for the Dealer to cut.</p>
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
