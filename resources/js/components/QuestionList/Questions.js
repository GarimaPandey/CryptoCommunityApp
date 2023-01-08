import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Question extends Component {
    render(){
    return (
        <div class="container">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    MongoDB How to search by using regex but avoiding case sensitive?
                    </button>
                </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                 
               <div class="row">
               <h9><b>Asked By</b></h9>
                    <div class="row">
                        <div class="col-1">
                        <icon>user dp</icon> 
                        </div>
                        <div class="col-5">
                            <div class="row">
                                <h7 id="username"><b>Pseudo Near Expert</b></h7>
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
               </div>  
             </div>
          </div>
        </div>
             </div>
             </div>

        )};
}
  
export default Question;
