import React, { Component } from 'react';
import * as actions from '../actions'
import { Button } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';

class UrediVino extends Component {

    constructor() {
        super();   
        this.state = {
            inputNaziv: ''
        }
    }


    componentDidMount() {



        const { slug } = this.props.match.params

       
            axios.get(`/api/vino/${slug}`)
              .then(res => {
                
                this.setState({
                    inputNaziv: res.data.naziv,
                    naziv: res.data.naziv,
                    inputProizvodjac: res.data.proizvodjac,
                    inputZemlja: res.data.zemlja,
                    inputVrsta: res.data.vrsta,
                    inputGodina: res.data.godina,
                    inputAlkohol: res.data.alkohol,
                    inputVelicina: res.data.velicina,
                    inputSlug: res.data.slug,
                    inputSlika: res.data.slika
                })
              });

            console.log('stttattettt', this.state)
          }


        // this.props.fetchSingleVino(slug);
    



    render() {       

console.log(this)
       
        return (
            <div className="row">

                <h3 className="brown-text">Uredi vino - {this.state.naziv}</h3>

                <form action={`/api/vino/uredi-vino/${this.state.inputSlug}`} className="col s12" id="vinoFormValidate" method="POST" enctype="multipart/form-data">

                    <div className="input-field col s12">
                        <input type="text" id="naziv" className="validate" name="naziv" value={this.state.inputNaziv} onChange={(e) => {this.setState({inputNaziv: e.target.value})}} />
                        <label className="active" htmlFor="naziv">Naziv vina</label>

                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="naziv" className="validate" name="proizvodjac" value={this.state.inputProizvodjac} />
                        <label className="active" htmlFor="proizvodjac">Naziv proizvođača</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="zemlje" className="validate" name="zemlja" value={this.state.inputZemlja} />
                        <label className="active" htmlFor="zemlja">Zemlja porijekla</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="vrsta" className="validate" name="vrsta" value={this.state.inputVrsta} />
                        <label className="active" htmlFor="vrsta">Vrsta vina</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="godina" className="validate" name="godina" value={this.state.inputGodina} />
                        <label className="active" htmlFor="godina">Godina berbe</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="alkohol" className="validate" name="alkohol" value={this.state.inputAlkohol} />
                        <label className="active" htmlFor="alkohol">Procenat alkohola</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="velicina" className="validate" name="velicina" value={this.state.inputVelicina} />
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
                        <img src={`/images/vina-thumbs/${this.state.inputSlika}`} width="100%" alt={this.state.inputNaziv} />

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






