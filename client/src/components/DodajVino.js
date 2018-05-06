import React, { Component } from 'react';
import { Button } from 'react-materialize';
// import { connect } from 'react-redux';

class DodajVino extends Component {
    render() {
        return (
            <div className="row">

                <form action={`/api/vino/dodaj-vino`} className="col s12" id="vinoFormValidate" method="POST" enctype="multipart/form-data">

                    <div className="input-field col s12">
                        <input type="text" id="naziv" className="validate" name="naziv" />
                        <label htmlFor="naziv">Naziv vina</label>

                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="naziv" className="validate" name="proizvodjac" />
                        <label htmlFor="proizvodjac">Naziv proizvođača</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="zemlje" className="validate" name="zemlja" />
                        <label htmlFor="zemlja">Zemlja porijekla</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="vrsta" className="validate" name="vrsta" />
                        <label htmlFor="vrsta">Vrsta vina</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="godina" className="validate" name="godina" />
                        <label htmlFor="godina">Godina berbe</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="alkohol" className="validate" name="alkohol" />
                        <label htmlFor="alkohol">Procenat alkohola</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input type="text" id="velicina" className="validate" name="velicina" />
                        <label htmlFor="velicina">Veličina boce</label>
                    </div>
                    <div className="file-field input-field col l6 s12">
                        <div className="btn brown">
                            <span>Dodaj sliku</span>
                            <input type="file" name="slika" id="slika" accept="image/gif, image/png, image/jpeg, image/jpg" />

                        </div>
                        <div className="file-path-wrapper">
                            <input type="text" className="file-path validate" />
                        </div>



                    </div>

                    <Button className="btn brown waves-effect waves-lighten btn-large col l6" style={{ bottom: -.5 + 'em' }} type="submit">Spremi vino</Button>



                </form>


            </div>
        )
    }
}

export default DodajVino;






