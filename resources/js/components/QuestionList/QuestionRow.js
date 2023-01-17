import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class QuestionRow extends Component {

    constructor(props){
        super(props);
    }
render()
 {   
    const myStyle={
        background:"#FFFFFF",
        borderRadius:"25px",
        height:"274px",
        width:"751px",
        padding:"24px",
        marginLeft:"100px",
        marginBottom:"24px",
        marginTop:"10px",
    }
    const fontStyle={
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontWeight:"700",
        fontSize:"16px",
        lineHeight:"24px",
        color:"#34324C",
    }
    const contentStyle={
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontSize:"16px",
        lineHeight:"24px",
        width:"703px",
        height:"72px",
        fontWeight:"400"
    }

    const askedStyle = {
        //styleName: Messages/ Title;
       width:"81px",
       height:"14px",
       fontWeight:"700",
       fontFamily:"Poppins",
       lineHeight:"14px",
       fontSize:"14px",

    }

    const userImage = {
        width: "40px",
        height: "40px",
        // paddingTop:"4px",
        // background: "url(moonbirds-1000x1000.png)",
        borderRadius: "157.75px",
    }

    const userText = {
        color:"#6074DD",
        width:"160px",
        height:"24px",
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontWeight:"700",
        fontSize:"16px",
        lineHeight:"24px"
    }
    const muteText = {
        color:"#969696",
        width:"152px",
        height:"21px",
        fontWeight:"400",
        fontSize:"14px",
        lineHeight:"21px",
    }
 return (
    <div style={myStyle}>
        <p style={fontStyle}>
            {this.props.data.question}
        </p>
        <div>
            <p style={contentStyle}> {this.props.data.description}</p>
            <hr/>
        </div>
            <div className="container">
                     <p style={askedStyle}>Asked By:</p> 
                        <div className="row">
                            <div className="col-1">
                           <i><img src="user.png" style={userImage}></img></i>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <span style={userText}><b>{this.props.data.name}</b></span>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <span style={muteText}>2 Answers 1 Question</span>
                                    </div>
                                </div>
                             </div>
                        </div>
            </div>  
     </div>
)}
 };
export default QuestionRow;