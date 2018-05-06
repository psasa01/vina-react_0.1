import React, { Component } from 'react'

class SpisakVrsti extends Component {
    render() {
        return (
            <div>
                <a href={`/vrste/${vrsta._id}`}>
                    <div style={{ marginRight: .3 + 'em', marginBottom: .1 + 'em' }} className="btn waves-effect waves-light btn-zemlja brown">
                        {vrsta._id} - {vrsta.count}
                    </div>
                </a>
            </div>
        )
    }
}




export default SpisakVrsti;