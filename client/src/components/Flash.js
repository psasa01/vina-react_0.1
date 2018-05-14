import React, { Component } from 'react';
import { connect } from 'react-redux';

class Flash extends Component {

    
    componentWillMount() {
        this.setState({ hidden: false })
    }
    
    render () {

        const { type, text } = this.props.obrisano.message
        return (


            <div>
{       !this.state.hidden  ? <div style={{ display: 'absolute' }}>
            <div className="flash-messages center-align">
                <div className={`flash flash--${type}`}>
                    <p className="flash__text">{text}</p>
                </div>
            </div>
        </div> : <div></div> }
        </div>
    )}
}

const mapStateToProps = ({ obrisano }) => {
    return { obrisano }

}


export default connect(mapStateToProps)(Flash)
