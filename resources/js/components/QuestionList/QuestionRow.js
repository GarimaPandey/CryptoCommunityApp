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
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        background:"#FFFFFF",
        borderRadius:"25px",
        height:"274px",
        width:"751px",
        borderRadius:"25px",
        padding:"24px",
        margin:"24px",
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
        position: "absolute",
        fontFamily:"Poppins",
        fontSize: "12px",
        fontStyle:"normal",
        fontWeight: "700",
        lineHeight: "14px",
        letterSpacing:"0em",
        textAlign:"left",
        color: "#34324C",
        padding:"2px"
    }

    const userImage = {
        width: "48px",
        height: "48px",
        paddingTop:"4px",
        // background: "url(moonbirds-1000x1000.png)",
        borderRadius: "157.75px",
    }
 return (
    <div style={myStyle}>
        <p style={fontStyle}>
                        {this.props.data.question}
            </p>
            <div>
                <p style={contentStyle}> {this.props.data.description}</p>
                <hr/>
                <div className="container">
                        <div className="row"style={askedStyle}>
                     <p>Asked By:</p> 
                        </div>
                        <div className="row">
                                    <div className="col-3">
                                  <img src="user.png" style={userImage}></img>
                                    </div>
                                    <div className="col-5">
                                        <div className="row">
                                            <h5><b>{this.props.data.name}</b></h5>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>2 Answers</h5>
                                            </div>
                                            <div className="col-6">
                                                <h5>1 Question</h5>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>  
             </div>
    </div>
)}
 };
export default QuestionRow;