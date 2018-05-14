import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import Flash from './Flash';
// import { Modal } from 'react-materialize';

class Vina extends Component {

    componentDidMount() {
        this.props.fetchVina()

    }

    render() {



        const vina = this.props.vina || [];
        const obrisano = this.props.obrisano || {};
        // const { type, text } = obrisano.message;
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
                                <Link className="modal-trigger brown-text card-zemlje" to={`/zemlje/${vino.zemlja}`}><p>{vino.zemlja.toUpperCase()}</p></Link>
                            </div>
                        </div>
                    </div>
                </Link>



            )
        })
        return (




            <div className="row" id="sliphover" >

            {
                obrisano.message ? 

                <Flash /> : <div></div>
            }

                <h3 className="brown-text">Zadnje dodana vina</h3>


                {renderCard}
            </div>

        )
    }
}

const mapStateToProps = ({ vina, obrisano }) => {
    return { vina, obrisano };
}



export default connect(mapStateToProps, actions)(Vina);
