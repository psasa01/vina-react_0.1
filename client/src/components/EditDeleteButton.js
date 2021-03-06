import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';


import * as actions from '../actions';

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
        console.log('thisssssssssssss', this.props)
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

    renderFab() {
        if((this.props.auth && this.props.auth.level < 11) || (this.props.auth && this.props.vino && this.props.auth.id.toString() === this.props.vino.korisnik.toString()) ) {
            return <div style={{ position: 'absolute !important' }} className="fixed-action-btn button-fab button-edit" >
            <div className="btn-floating btn-large brown">
                <i className="large material-icons">
                    arrow_drop_up
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

                        <div onClick={this.showDeleteModal.bind(this)} className="btn-floating blue" style={{ borderRadius: 0 }}>
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
                        <Link to={`/uredi-vino/${this.props.listNameFromParent.slug}`} className="btn-floating red" style={{ borderRadius: 0 }}>
                            <i className="material-icons">mode_edit</i>
                        </Link>

                    </Tooltip>
                </li>
            </ul>


        </div>
        } else {
            return <div></div>
        }
    }
    render() {

        console.log(this)

        return (



            <div>

                {
                    this.state.showDeleteModal === true ?

                        <div style={{ position: 'absolute', left: 2 + '%', top: 1 + 'em', width: 96 + '%' }}>
                            <div class="row">
                                <div className="col s12">
                                    <div className="card white darken-1">
                                        <div className="card-content brown-text">
                                            <span className="card-title">Da li zaista želite obrisati vino {this.props.listNameFromParent.naziv}?</span>

                                        </div>
                                        <div className="card-action">

                                            <div onClick={this.hideDeleteModal.bind(this)}>
                                                <div style={{ margin: .2 + 'em', bottom: .5 + 'em' }} className=" right btn green waves-effect waves-lighten">Zatvori</div>
                                            </div>

                                            <a onClick={() => {
                                                this.props.obrisiVino(this.props.listNameFromParent.slug);
                                                this.props.history.goBack(2);
                                            }
                                            }>
                                                <div style={{ margin: .2 + 'em', bottom: .5 + 'em' }} className="right btn red waves-effect waves-lighten">Obriši</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> :

                        <div></div>


                }

                


                    {this.renderFab()}
             
            </div >

        )
    }
}

const mapStateToProps = ({ obrisano, auth, vino }) => {
    return {obrisano, auth, vino};
}


export default withRouter(connect(mapStateToProps, actions)(EditDeleteButton));

