import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
// import { Modal } from 'react-materialize';

class Godine extends Component {

    componentDidMount() {
        const { godina } = this.props.match.params
        this.props.vinaPoGodinama(godina);

        console.log('gdfgsfgafg', this.props.match)

    }


    render() {
        const godine = this.props.godine || {};
        const god = godine.god || [];
        const vina = godine.vina || [];
        console.log('gffdgfgfgf', this.props)

        const renderGodine = god.map((godina) => {

            if (!godina._id) {
                return (
                    <a href="/godine/null" key="null">
                        <div style={{ marginRight: .3 + 'em', marginBottom: .1 + 'em' }} className="btn waves-effect waves-light btn-zemlja brown">
                            Bez godine - {godina.count}
                        </div>
                    </a>
                )
            } else {

                return (



                    <a href={`/godine/${godina._id}`} key={godina._id}>
                        <div style={{ marginRight: .3 + 'em', marginBottom: .1 + 'em' }} className="btn waves-effect waves-light btn-zemlja brown">
                            {godina._id} - {godina.count}
                        </div>
                    </a>

                )
            }
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

            <div className="row">
                <h3 className="brown-text">{godine.title}</h3>
                <hr />
                {renderGodine}
                <hr />
                {renderCard}
            </div>

        )

    }

}

const mapStateToProps = ({ godine }) => {
    return { godine };
}

export default connect(mapStateToProps, actions)(Godine)