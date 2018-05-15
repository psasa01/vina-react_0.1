import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
// import { Modal } from 'react-materialize';

class Zemlje extends Component {

    componentDidMount() {

        const { zemlja } = this.props.match.params
        this.props.vinaPoZemljama(zemlja);

    }
    render() {

        const zemlje = this.props.zemlje || {};
        const zem = zemlje.zem || [];
        const vina = zemlje.vina || [];
        console.log(zemlje)

        const renderZemlje = zem.map((zemlja) => {
            return (



                <a href={`/zemlje/${zemlja._id}`}>
                    <div style={{ marginRight: .3 + 'em', marginBottom: .1 + 'em' }} className="btn waves-effect waves-light btn-zemlja brown">
                        {zemlja._id} - {zemlja.count}
                    </div>
                </a>

            )
        })

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
                                <img src={`/images/vina-thumbs/${vino.slika || 'slika.jpg'}`} alt={vino.naziv} />
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

            <div className="row">
                <h3 className="brown-text">{zemlje.title}</h3>
                <hr />
                {renderZemlje}
                <hr />
                {renderCard}
            </div>

        )

    }

}

const mapStateToProps = ({ zemlje }) => {
    return { zemlje };
}

export default connect(mapStateToProps, actions)(Zemlje)