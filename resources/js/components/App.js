import { applyStyles } from '@popperjs/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './QuestionList/Questions'
import About from './About/About';
import Expert from './TopExperts/TopExperts';
import Protocol from './Protocol/Protocol';
import NewQuestion from './QuestionList/NewQuestion';

function App() {
 
    return (
        <div className="container">
    
           <div class="row">
                <div class="col-14"><Protocol /></div>
            </div>
            <div class="row">
                <div class="col-8">
                    <Questions/>
                    <Questions/>
                    <Questions/>
                    <Questions/>
                    <Questions/>

                </div>
               

                <div class="col-4">
                    <div class="row">
                        <About/>
                    </div>
                    <div clas="row">
                        <Expert/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;