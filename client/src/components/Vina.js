import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class Vina extends Component {

    componentDidMount() {
        this.props.fetchVina()
    }

    render() {

        return (
            <div></div>
        )
    }
}

const mapStateToProps = ({ vina }) => {
    return { vina };
}

export default connect(mapStateToProps, actions)(Vina);
