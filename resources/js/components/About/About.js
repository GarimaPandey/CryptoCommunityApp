import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class About extends Component {
    render(){
        const divStyle = {
            height:"283px",
            width:"352px",
            padding:"24px",
            borderRadius:"25px",            
            backgroundColor:"#FFFFFF",
            lineHeight:"50px",
            fontSize:"24px",
            fontWeight:"600",
            fontStyle:"normal",
            margin:"12px"

        }
        const aboutStyle = {
           //styleName: H2/ SemiBold;
            fontFamily: "Rubik",
            fontStyle:"normal",
            fontSize: "24px",
            fontWeight:"600",
            lineHeight:"32px",
            letterSpacing:"0em",
            textAlign:"left",
        }
        const expertStyle = {
            fontFamily: "Poppins",
            fontStyle:"normal",
            fontSize: "16px",
            fontWeight:"500",
            lineHeight: "24px",
            letterSpacing:"0em",
            textAlign: "center",
        }
        const qastyle= {
            //styleName: Body/ Medium;
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight:"500",
            lineHeight:"24px",
            letterSpacing:"0em",
            textAlign:"center",
        }

        const upvoteStyle  = {
            height:"24px",
            width:"100px",
            left:"36px",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontWeight:"500",
            lineHeight:"24px",
            textAlign:"center",
        }
        const tokenStyle = {
            height:"24px",
            width:"165px",
            left:"36px",
            borderRadius:"nullpx",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontWeight:"500",
            lineHeight:"24px",
            letterSpacing:"0em",
            textAlign:"center",
        }
     
    return (

        <div className="container" style={divStyle}>
         <div id="about">              
                <h2 style={aboutStyle}>About</h2>
            </div>
               <div className="row">
                    <div className="col-1"> 
                          <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            </svg></i>
                    </div>
                    <div className="col-4">   
                            <span style={expertStyle}>246 Experts</span></div>
                    </div>
                
                <div className="row">
                        <div className="col-1">
                           <i> <img src="comment1.png"></img></i></div>
                        <div className="col-10">
                            <span style={qastyle}>100k Questions and Answers</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <i><img src="upvote.png"></img></i>
                        </div>
                        <div className="col-5"><span style={upvoteStyle}>50k Upvotes</span></div>
                    </div>
                    <div className="row">
                    <div className="col-1">
                    <i><img src="token.png"></img></i>
                    </div>
                    <div className="col-8"> <span style={tokenStyle}>145 Tokens Awarded</span></div>
                    </div>
            </div>  
    )};
}

export default About;
