import { applyStyles } from '@popperjs/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './QuestionList/Questions'
import About from './About/About';
import Expert from './TopExperts/Experts';
import Protocol from './Protocol/Protocol';
import NewQuestion from './QuestionList/NewQuestion';
import SideNav from './SideNav/SideNav';

function App() {

    // '@media (max-width: 500px)'= {
    //     display: 'none',
    //   }

    const protocolStyle = {
        alignItem:"center",
    }
    const questionStyle = {
        alignItem:"center", 
        width:"1440px",
        backgroundColor:"#1E1E1E",
    }

    return (  
        <>
        <div className="row">
                <div style={questionStyle}><NewQuestion/></div>
            </div>  
        <div className="container">
            
           <div className="row">
                <div style={protocolStyle} className="col-10"><Protocol/></div>

            </div>
            <div className="row">
                <div className="col-8">
                    <Questions/>
                </div>
                <div className="col-4">
                   <SideNav/>
                </div>
            </div>
        </div>
        </>
    );
}


export default App;