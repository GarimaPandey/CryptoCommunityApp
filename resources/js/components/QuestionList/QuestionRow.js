import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class QuestionRow extends Component {

    constructor(props){
        super(props);
    }
render()
 {   
 return (
        <div class="accordion-item" >
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5>
                        {this.props.data.question}
                    </h5>               
                     </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <h5> {this.props.data.description}</h5>
                <hr/>
                <div class="container">
                        <div class="row">
                        <h5><b>Asked By:</b></h5>
                                <div class="row">
                                    <div class="col-2">
                                    <p class="card-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                     </svg>
                                     </p>
                                    </div>
                                    <div class="col-5">
                                        <div class="row">
                                            <h5 id="username"><b>{this.props.data.name}</b></h5>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>2 Answers</h5>
                                            </div>
                                            <div class="col-6">
                                                <h5>1 Question</h5>
                                            </div>
                                        </div>
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