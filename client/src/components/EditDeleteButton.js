import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

class EditDeleteButton extends Component {

    constructor(props) {
        super(props);
        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.hideDeleteModal = this.hideDeleteModal.bind(this);
    }


    componentWillMount() {
        this.setState({
            showDeleteModal: false
        })
    }


    hideDeleteModal() {
        this.setState({
            showDeleteModal: false
        })
    }

    showDeleteModal() {
        this.setState({
            showDeleteModal: true
        })
    }


    render() {


        return (



            <div>

                {
                    this.state.showDeleteModal === true ?

                        <div>ff</div> :

                        <div>aa</div>


                }


                <div className="fixed-action-btn button-fab button-edit" id="home-button">
                    <div className="btn-floating btn-large brown">
                        <i className="large material-icons">
                            chevron_left
                            </i>
                    </div>
                    <ul>
                        <li>
                            <Tooltip
                                title="Obriši vino"
                                position="left"
                                arrow="true"
                                distance="8"
                            >

                                <div onClick={this.showDeleteModal.bind(this)} className="btn-floating blue">
                                    <i className="material-icons">clear</i>
                                </div>


                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip
                                title="Uredi vino"
                                position="left"
                                arrow="true"
                                distance="8"
                            >
                                <Link to={`/uredi-vino/${this.props.listNameFromParent.slug}`} className="btn-floating red">
                                    <i className="material-icons">mode_edit</i>
                                </Link>

                            </Tooltip>
                        </li>
                    </ul>


                </div>
            </div>

        )
    }
}

export default EditDeleteButton;