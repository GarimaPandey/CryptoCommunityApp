import { applyStyles } from '@popperjs/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './QuestionList/Questions'
import About from './About/About';
import Expert from './TopExperts/TopExperts';
import Protocol from './Protocol/Protocol';
import NewQuestion from './QuestionList/NewQuestion';
import SideNav from './SideNav/SideNav';

function App() {
    const divStyle={
        padding:"20px",
    }
    return (    
        <div className="container">
            <div class="row">
                <div class="col-14"><NewQuestion/></div>
            </div>
           <div class="row">
                <div class="col-2">

                </div>
                <div class="col-14" ><Protocol/></div>
                <div class="col-2"></div>

            </div>
            <div class="row">
                <div class="col-8">
                    <Questions/>
                </div>
                <div class="col-4">
                   <SideNav/>
                </div>
            </div>
        </div>
    );
}


export default App;