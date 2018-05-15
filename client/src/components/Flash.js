import React, { Component } from 'react';
import { connect } from 'react-redux';

class Flash extends Component {
    constructor(props) {
        super(props);
        this.hideFlash = this.hideFlash.bind(this);
        this.hideFlashOnTimeout = this.hideFlashOnTimeout.bind(this);
    }
    
    componentWillMount() {
        this.setState({ hidden: false });
        
    }
    
    hideFlash() {
        this.setState({
            hidden: true
        })
    }

    hideFlashOnTimeout() {
        setTimeout(() => {
            this.setState({
                hidden: true
            })
        }, 3000)
    }

    render () {

        const { type, text } = this.props.obrisano.message

        this.hideFlashOnTimeout();

        return (


            <div onClick={this.hideFlash.bind(this)}>

            

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
