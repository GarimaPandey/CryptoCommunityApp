import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Expert extends Component {
    render(){
        const myStyle={
            width:"352px",
            height:"371px",
            borderRadius:"25px",
            padding:"24px 24px 24px 24px",
            backgroundColor:"#FFFFFF",
            margin:"12px"
        };
        const divStyle ={
            paddingLeft:"2px",
        }
        const userText = {
            width:"250px",
            height:"24px",
            fontFamily:"Poppins",
            fontStyle:"normal",
            fontWeight:"700",
            fontSize:"16px",
            lineHeight:"24px",
            color:"#6074DD",
        }
        const heading ={
            //styleName: H2/ SemiBold;
            fontFamily: "Rubik",
            fontSize: "24px",
            fontWeight:"600",
            lineHeight:"32px",
            letterSpacing:"0em",
            textAlign:"left",

        }
        const userImage = {
            width: "40px",
            height: "40px",
            // paddingTop:"4px",
            // background: "url(moonbirds-1000x1000.png)",
            borderRadius: "157.75px",
        }
        return (
    <div className="container" style={myStyle}>
            <h3 style={heading}>Top Experts</h3>
            <div className="row" style={divStyle}>
                    <div className="col-2">
                        <i><img src="user.png" style={userImage}></img></i>
                    </div>
                    <div className="col-8">
                        <div className="row"> 
                        <span style={userText}>Pseudo Near Expert</span>
                        </div>
                        <div className="row">
                        <div className="col-8"><p className="text-muted">47 <svg xmlns="boy-svgrepo-com.svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                </svg>     collected</p></div>  
                        </div>  
                    </div>
            </div>
            <div className="row" style={divStyle}>
                    <div className="col-2"><i><img src="user.png" style={userImage}></img></i></div>
                    <div className="col-8">
                    <div className="row"> <span style={userText}>Near Expert</span></div>
                    <div className="row">
                        <div className="col-8"><p className="text-muted">47 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                </svg>     collected</p></div>  
                    </div>  
                    </div>
            </div>
            <div className="row" style={divStyle}>
                    <div className="col-2"><i><img src="user.png" style={userImage}></img></i></div>
                    <div className="col-8">
                    <div className="row"> <span style={userText}>Bitcoin Maxi</span></div>
                    <div className="row">
                        <div className="col-8"><p className="text-muted">47 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                </svg>     collected</p></div>  
                    </div>  
                    </div>
            </div>
            <div className="row" style={divStyle}>
                    <div className="col-2"><i><img src="user.png" style={userImage}></img></i></div>
                    <div className="col-8">
                    <div className="row"> <span style={userText}>Ethereum Maxi</span></div>
                    <div className="row">
                        <div className="col-8"><p className="text-muted">47 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                </svg>     collected</p></div>  
                    </div>  
                    </div>
            </div>
         </div>       
    )};
}

export default Expert;
