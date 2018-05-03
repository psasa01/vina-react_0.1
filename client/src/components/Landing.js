import React, { Component } from 'react'

class Landing extends Component {
    render() {
        return(
            <img 
                className="responsive-img img-index" 
                style={{position: "fixed", top: "4em"}} 
                src="./images/vis.jpg" 
                alt="vis"
            />
        ) 
    }
}

export default Landing;