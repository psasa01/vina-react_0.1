import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
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

                            <Route exact path='/surveys' component={Dashboard} />
                            <Route path='/surveys/new' component={SurveyNew} />
                            <Route path="/login" component={Login} />
                            <Route path='/register' component={Register}/>
                            
                            
                        </div>


                    </div>
                </BrowserRouter>
            </div>
        
        );
    }
}

export default connect(null, actions)(App);