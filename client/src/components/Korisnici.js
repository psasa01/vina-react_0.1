import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
// import { Modal } from 'react-materialize';

class Korisnici extends Component {

    componentDidMount() {

        const { korisnik } = this.props.match.params
        this.props.vinaPoKorisnicima(korisnik);

    }
    render() {
        const korisnici = this.props.korisnici || {};
        const kor = korisnici.kor || [];
        const vina = korisnici.vina || [];
        console.log(korisnici)

        const renderKorisnici = kor.map((korisnik) => {
            return (



                <a href={`/korisnici/${korisnik._id}`}>
                    <div style={{ marginRight: .3 + 'em', marginBottom: .1 + 'em' }} className="btn waves-effect waves-light btn-zemlja brown">
                        {korisnik._id} - {korisnik.count}
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
                <h3 className="brown-text">{korisnici.title}</h3>
                <hr />
                {renderKorisnici}
                <hr />
                {renderCard}
            </div>

        )

    }

}

const mapStateToProps = ({ korisnici }) => {
    return { korisnici };
}

export default connect(mapStateToProps, actions)(Korisnici)