import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import Landing from './Landing';
import Footer from './Footer';
import Vina from './Vina';
import SingleVino from './SingleVino';
import Zemlje from './Zemlje';
import Vrste from './Vrste';
import Korisnici from './Korisnici';
import Godine from './Godine';
import MojaKolekcijaVina from './MojaKolekcijaVina';
import DodajVino from './DodajVino';
import UrediVino from './UrediVino';


const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <div className="container">

                            <Route path='/vina/zadnjeDodanaVina' component={Vina} />
                            <Route path='/surveys/new' component={SurveyNew} />
                            <Route path="/login" component={Login} />
                            <Route path='/register' component={Register} />
                            <Route path="/vino/:slug" component={SingleVino} />
                            <Route path='/zemlje/:zemlja?' component={Zemlje} />
                            <Route path='/vrste/:vrsta?' component={Vrste} />
                            <Route path='/korisnici/:korisnik?' component={Korisnici} />
                            <Route path='/godine/:godina?' component={Godine} />
                            <Route path='/mojaKolekcijaVina' component={MojaKolekcijaVina} />
                            <Route path='/dodaj-vino' component={DodajVino} />
                            <Route path='/uredi-vino/:slug' component={UrediVino} />




                        </div>
                        <Footer />


                    </div>
                </BrowserRouter>
            </div>

        );
    }
}

export default connect(null, actions)(App);