import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Protocol extends Component {
   
    render(){
        const protocolStyle = {
            height:"242px",
            width: "1120px",
            marginLeft: "100px",
            marginTop:"20px",
            marginBottom:"50px",
            borderRadius:"32px",
            paddingLeft:"395px",
            paddingTop:"87px",
            backgroundColor: "#969696",
        }
        const fontStyle = {
            
            marginLeft:"26px",
            marginTop:"10px",
            width: "233px",
            height: "49px",
            
            /* H1/ Title */
            
            fontFamily:'Rubik',
            fontStyle: "normal",
            fontWeight:"700",
            fontSize:"32px",
            lineHeight: "40px",
            /* or 125% */
            
            
            /* Text */
            
            color: "#34324C",
            
        }
        const imageStyle = {
            width:"69px",
            height:"69px",
            background:"url(protocol.png)",
        }
    return (
    <div className="row" style={protocolStyle}>
         <div style={imageStyle}></div><span style={fontStyle}>Near Protocol</span>
    </div>
               
    )};
}

export default Protocol;
