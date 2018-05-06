import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';
import { Link } from 'react-router-dom';


class MojaKolekcijaVina extends Component {


    componentDidMount() {
        this.props.mojaKolekcijaVina();
        this.props.fetchUser();
    }


    render() {
        const auth = this.props.auth || {};
        const ime = auth.ime;
        const vina = this.props.moja || [];

        const renderCard = vina.map((vino) => {

            return (

                <Link to={`/vino/${vino.slug}`} key={vino._id} className="modal-trigger">
                    <div className="col s12 m6 l3">
                        <div
                            className="card z-depth-2"
                        >
                            <div
                                className="card-image sliphover-target"
                                data-caption={`<a className="modal-trigger sliphover-options" href='#${vino.slug}'><div className="sliphover-wrapper"><p>${vino.naziv}</p></div></a>`}
                            >
                                <img src={`/images/vina-thumbs/${vino.slika}`} alt={vino.naziv} />
                                <div className="korisnik">
                                    <p className="card-ime">{vino.ime}</p>
                                </div>
                                <div className="card-title card-style">
                                    <p>{vino.naziv}</p>
                                </div>
                            </div>
                            <div className="card-action brown lighten-4 action-style brown-text">
                                <a className="modal-trigger brown-text card-zemlje" href={`/zemlje/${vino.zemlja}`}><p>{vino.zemlja.toUpperCase()}</p></a>
                            </div>
                        </div>
                    </div>
                </Link>

            )
        })
        return (
            <div className="row" id="sliphover">

                <h3 className="brown-text">Moja kolekcija vina - {ime}</h3>
                <hr />
                {renderCard}
            </div>
        )
    }
}

const mapStateToProps = ({ moja, auth }) => {
    return { moja, auth };
}

export default connect(mapStateToProps, actions)(MojaKolekcijaVina)