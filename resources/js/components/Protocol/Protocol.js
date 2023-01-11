import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Protocol extends Component {
   
    render(){
        const protocolStyle = {
            width:"1120px",
            height:"242px",
            topMargin:"96px",
            leftMargin:"160px",
            borderRadius:"32px",
            gap:"10px",
            position:"absolute",
            background:"#969696",
            borderRadius:"32px"
        }
        const fontStyle = {
            width:"233px",
            height:"49px",
            marginTop:"10x",
            marginLeft:"97px"
        }
    return (
    <div style={protocolStyle}>
            {/* <img src="protocol.png" className="img-fluid"/> */}
            <p style={fontStyle}>Near Protocol</p>
    </div>
               
    )};
}

export default Protocol;
