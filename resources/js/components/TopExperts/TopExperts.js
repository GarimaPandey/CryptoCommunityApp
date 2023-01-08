import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Expert extends Component {
    render(){
       
        return (
    <div class="container">
            <div class="row card">
            <h3>Top Experts</h3>

                    <div class="row">
                            <h5 id="username"><b>Pseudo Near Expert</b></h5>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <h7>2 Answers</h7>
                        </div>
                        <div class="col-4">
                            <h7>1 Question</h7>
                        </div>
                 </div>
             </div>
         </div>       
    )};
}

export default Expert;
