import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

class HomeButton extends Component {

    goBack = (props) => {
        this.props.history.goBack();
    }

    render() {
        return (

            <div className="fixed-action-btn button-fab" id="home-button">
                <div className="btn-floating btn-large brown">
                    <i className="large material-icons">
                        keyboard_arrow_up
                            </i>
                </div>
                <ul>
                    <li>
                        <Tooltip
                            title="Početna"
                            position="left"
                            arrow="true"
                            distance="8"
                        >
                            <Link to="/" className="btn-floating red">
                                <i className="material-icons">home</i>
                            </Link>

                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            title="Nazad"
                            position="left"
                            arrow="true"
                            distance="8"
                        >
                            <div onClick={this.goBack.bind(this)} className="btn-floating blue">
                                <i className="material-icons">chevron_left</i>
                            </div>

                        </Tooltip>
                    </li>
                </ul>


            </div>


        )
    }
}

export default withRouter(HomeButton);