import React, { Component } from 'react';
import * as actions from '../actions'
import { Button } from 'react-materialize';
import { connect } from 'react-redux';


class UrediVino extends Component {



    componentDidMount() {

        const { slug } = this.props.match.params
        this.props.fetchSingleVino(slug);
        console.log('this', this.props)


    }

    render() {

        const vino = this.props.vino || {}
        console.log(vino)

        return (
            <div className="row">

                <h3 className="brown-text">Uredi vino - {vino.naziv}</h3>

                <form action={`/api/vino/uredi-vino/${vino.slug}`} className="col s12" id="vinoFormValidate" method="POST" enctype="multipart/form-data">

                    <div className="input-field col s12">
                        <input type="text" id="naziv" className="validate" name="naziv" value={vino.naziv} ref={(input) => this.input = input} />
                        <label className="active" htmlFor="naziv">Naziv vina</label>

                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="naziv" className="validate" name="proizvodjac" value={vino.proizvodjac} />
                        <label className="active" htmlFor="proizvodjac">Naziv proizvođača</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="zemlje" className="validate" name="zemlja" value={vino.zemlja} />
                        <label className="active" htmlFor="zemlja">Zemlja porijekla</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="vrsta" className="validate" name="vrsta" value={vino.vrsta} />
                        <label className="active" htmlFor="vrsta">Vrsta vina</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="godina" className="validate" name="godina" value={vino.godina} />
                        <label className="active" htmlFor="godina">Godina berbe</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="alkohol" className="validate" name="alkohol" value={vino.alkohol} />
                        <label className="active" htmlFor="alkohol">Procenat alkohola</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="velicina" className="validate" name="velicina" value={vino.velicina} />
                        <label className="active" htmlFor="velicina">Veličina boce</label>
                    </div>
                    <div className="file-field input-field col l6 s12">
                        <div className="btn brown">

                            <span>Uredi sliku</span>
                            <input type="file" name="slika" id="slika" accept="image/gif, image/png, image/jpeg, image/jpg" />

                        </div>
                        <div className="file-path-wrapper">
                            <input type="text" className="file-path validate" />
                        </div>



                    </div>

                    <Button className="btn brown waves-effect waves-lighten btn-large col l6" style={{ bottom: -.5 + 'em' }} type="submit">Uredi vino</Button>



                </form>
                <div className="row">
                    <br />
                    <div className="col l3 m6">
                        <img src={`/images/vina-thumbs/${vino.slika}`} width="100%" alt={vino.naziv} />

                    </div>
                </div>




            </div>
        )
    }
}

const mapStateToProps = ({ vino }) => {
    return { vino };
}

export default connect(mapStateToProps, actions)(UrediVino);






