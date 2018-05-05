import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

// import { Modal } from 'react-materialize';

class SingleVino extends Component {




    componentWillMount() {

        this.setState({
            showFullScreenImage: false
        });

    }


    componentDidMount() {

        const { slug } = this.props.match.params

        this.props.fetchSingleVino(slug);


    }

    constructor(props) {
        super(props);
        this.hideFullScreenImage = this.hideFullScreenImage.bind(this);
        this.showFullScreenImage = this.showFullScreenImage.bind(this);
    }

    hideFullScreenImage() {
        this.setState({
            showFullScreenImage: false
        })
    }

    showFullScreenImage() {
        this.setState({
            showFullScreenImage: true
        })
    }

    render() {
        const vino = this.props.vino || {}
        console.log(vino)
        return (
            <div>


                {
                    this.state.showFullScreenImage === true ?
                        <div className="slika-fullscreen">
                            <img src={`/images/vina-big/${vino.slika || 'slika.jpg'}`} alt={vino.naziv} />
                            <div className="btn-floating red modal-close btn-large waves-effect waves-light" id="slika-close">
                                <i
                                    className="material-icons"
                                    onClick={this.hideFullScreenImage}
                                >clear</i>
                            </div>


                        </div> :

                        <div></div>

                }





                <div
                    className="row z-depth-2 brown lighten-5"
                    style={{ position: 'relative', padding: 2 + 'em', margin: 2 + 'em' }}
                >
                    <div className="col l4 s12 slika slika-trigger">
                        <img
                            onClick={this.showFullScreenImage}
                            src={`/images/vina-thumbs/${vino.slika || 'slika.jpg'}`}
                            alt={vino.naziv}
                            className="z-depth-2"
                            style={{ width: 90 + '%' }}
                        />
                        <p className="brown-text" style={{ fontSize: 1 + 'em' }}>Dodao {vino.ime}</p>

                    </div>
                    <div className="col l1">
                    </div>
                    <div className="col l7 s12 brown-text">
                        <h4>{vino.naziv}</h4>
                        <br />
                        <br />
                        <h5>Zemlja porijekla: {vino.zemlja}</h5>
                        <h5>Proizvođač: {vino.proizvodjac}</h5>
                        <h6>Vrsta: {vino.vrsta}</h6>
                        <br />
                        <h5>Godina berbe: {vino.godina}</h5>
                        <h5>Procenat alkohola: {vino.alkohol}%</h5>
                        <h5>Veličina boce: {vino.velicina} litara</h5>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({ vino }) => {
    return { vino };
}

export default connect(mapStateToProps, actions)(SingleVino);