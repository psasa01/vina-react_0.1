import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class Vina extends Component {

    componentDidMount() {
        this.props.fetchVina()
        
    }

    render() {
      
        const vina = this.props.vina || [];
        const renderCard = vina.map((vino) => {
            return(
                        
                <a href={`#${vino.slug}`} className="modal-trigger">
                    <div className="col s12 m6 l3">
                        <div className="card z-depth-2">
                            <div 
                                className="card-image sliphover-target"
                                data-caption={`<a class="modal-trigger sliphover-options" href='#${vino.slug}'><div class="sliphover-wrapper"><p>${vino.naziv}</p></div></a>`}
                            >
                                <img src={`/images/vina-thumbs/${vino.slika}`} alt={vino.naziv}/>
                                <div className="korisnik">
                                    <p className="card-ime">{vino.ime}</p>
                                </div>
                                <div className="card-title card-style">
                                    <p>{vino.naziv}</p>
                                </div>
                            </div>
                            <div className="card-action brown lighten-4 action-style brown-text">
                                <a className="brown-text" href={`/zemlje/${vino.zemlja}`}>{vino.zemlja.toUpperCase()}</a>
                            </div>
                        </div>
                    </div>
                </a>

            )
        })
        return (
          
                <div className="row" id="sliphover">
                    {renderCard}
                </div>
        
        )
    }
}

const mapStateToProps = ({ vina }) => {
    return { vina };
}

export default connect(mapStateToProps, actions)(Vina);
