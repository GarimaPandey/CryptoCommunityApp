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
    const divStyle={
        padding:"20px",
    }
    return (    
        <div className="container">
            <div className="row">
                <div className="col-14"><NewQuestion/></div>
            </div>
           <div className="row">
                <div className="col-2">

                </div>
                <div className="col-14" ><Protocol/></div>
                <div className="col-2"></div>

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
    );
}


export default App;