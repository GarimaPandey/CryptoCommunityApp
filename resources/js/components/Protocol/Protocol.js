import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Protocol extends Component {
   
    render(){
        const protocolStyle = {
            paddingBottom:"30px",
        }
    return (
    <div className="container" style={protocolStyle}>
            <img src="protocol.png" className="img-fluid"/>
    </div>
               
    )};
}

export default Protocol;
