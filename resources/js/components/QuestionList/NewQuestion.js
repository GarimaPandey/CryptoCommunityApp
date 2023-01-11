import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';

class NewQuestion extends Component{
      

      constructor(props){
        super(props);
        this.state = {
          questionName : null,
          questionDescription : null
        }
      }

      //Creating Questions name state

      inputQuestion = (event) =>{
        this.setState({
          questionName: event.target.value,
        });
      }

      //Creating Questions description state

      inputDescription = (event) =>{
        this.setState({
          questionDescription: event.target.value,
        });
      }
      
      //storing employee data
      storeQuestionsData = () =>
      {
        axios.post('/store/question/data',{
          questionName:this.state.questionName,
          questionDescription:this.state.questionDescription,
        }).then(()=>{
            console.log("succesfully saved!!");
          setTimeout(()=>{
            location.reload();
          },1000);
        })
      }
      render(){
        const myBtn = {
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          width:"112px",
          height:"30px",
          backgroundColor:"#6074DD",
          gap:"4px",
          padding:"8px 12px",
          position:"absolute",
          top:"29px",
          border:"1px solid #6074DD",
          boxShadow:"0px 4px 8px",
          borderRadius:"25px",
          fontFamily:"Poppins",
          fontStyle:"normal",
          fontWeight:"400",
          fontSize:"12px",
          lineHeight:"14px",
          color:"#FFFFFF",
        }
        return(
         
          <>
          <div className='row text-right mb-3 pb-3'>
                <button className='btn btn-info text-right col-3 offset-md-9'
                style={myBtn}
                data-toggle="modal"
                data-target="#modalCreate"
                >
                Ask a question
                </button>
          </div>
           <div className="modal fade" id="modalCreate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ask a Question</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                      <form className='form'>
                        <div className="form-group">
                        <input type="text"
                              id="questionName"
                              className='form-control mb-3'
                              placeholder="Enter the question title"
                              onChange={this.inputQuestion}
                              />
                        </div>
                        <div className="form-group">
                          <input type="text"
                              id="questionDescription"
                              className='form-control mb-3'
                              placeholder="Write your question here"
                              onChange={this.inputDescription}
                              />
                        </div>
                      
                      </form>



                  </div>
                  <div className="modal-footer">
                  <input type="button" value="Save"
                              onClick={this.storeQuestionsData}
                              className='btn btn-info'
                              />
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
      }
}
export default NewQuestion;