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
        <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5>
                        {this.props.data.question}
                    </h5>               
                     </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <h5> {this.props.data.description}</h5>
                <hr/>
                <div className="container">
                        <div className="row">
                        <h5><b>Asked By:</b></h5>
                                <div className="row">
                                    <div className="col-2">
                                    <p className="card-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                     </svg>
                                     </p>
                                    </div>
                                    <div className="col-5">
                                    <div className="card-text">
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
                        </div>
                    </div>
            </div>
)}
 };
export default QuestionRow;