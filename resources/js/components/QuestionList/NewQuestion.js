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
        const modalStyle ={
          height:"424px",
          width:"510px",
          borderRadius:"25px",
          background: "#FFFFFF",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "25px",
          marginLeft:"30%",

        }
        const myBtn = {
          height:"30px",
          width:"112px",
          marginLeft:"1000px",
          marginRight:"192px",
          marginTop: "29px",
          marginBottom:"45px",
          borderRadius:"25px",
          padding:"8px 12px 8px 12px",
          border: "1px solid",
          backgroundColor: "#6074DD",
          alignItem :"center",
          color:"white",
          fontHeight:"14px",
          fontWidth: "88px",
          
          /* Messages/ Body */
          
          fontFamily:"Poppins",
          fontStyle:"normal",
          fontWeight:"400",
          fontSize:"12px",
          lineHeight:"14px",
          /* identical to box height, or 117% */
          
          
          /* White */
          
          color:"#FFFFFF"

        }
        const closeStyle = {
          height: "20px",
          width: "20px",
          // paddingLeft: "2px",
          // paddingTop: "2px",
          borderRadius: "50%",
          textAlign:"center",

          // position:"absolute",
          

          /* Primary */

          border: "2px solid #6074DD"
        }
        const textStyle={
         position:"absolute",
         height: "20px",
          width: "20px",
          // left: "2px",
          // top: "2px",
          borderRadius: "0px",
          left: "93%",
          // right:"8.33%",
          top: "8.33%",
          bottom: "60%",

// /* Primary */

// border: 2px solid #6074DD;

        }
        const modalHeading = {
          //styleName: H3/ Bold;
          fontFamily: "Rubik",
          fontSize: "20px",
          fontWeight:"700",
          lineHeight: "28px",
          letterSpacing:"0em",
          textAlign:"center",

        }
        const textBoxStyle={
          height:"200px",
        }
        const btn1Style = {
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          padding:"4px 8px",
          gap: "6px",
          width:"51px",
          fontHeight:"14px",
          fontWidth: "27px",
          height:"26px",

          /* Messages/ Title */

          fontFamily: 'Poppins',
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "14px",

          /* Shade/ Primary */

          background: "#99A5E6",
          /* Button Shadow */

          boxShadow: "0px 4px 8px",
          borderRadius: "25px",
          color:"#FFFFFF",
        }
        return(
         
          <>
          <div className='row'>
                <button 
                style={myBtn}
                data-toggle="modal"
                data-target="#modalCreate"
                >
                Ask a question
                </button>
          </div>
           <div className="modal fade" id="modalCreate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={modalStyle}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={modalHeading}>New Question</h5>
                    <button type="button" className="close" style={closeStyle} data-dismiss="modal" aria-label="Close">
                      <span style={textStyle}><img src="close.png"></img></span>
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
                              style={textBoxStyle}
                              id="questionDescription"
                              className='form-control'
                              placeholder="Write your question here"
                              onChange={this.inputDescription}
                              />
                        </div>
                      
                      </form>



                  </div>
                  <div className="modal-footer">
                  <input type="button" value="Save"
                              onClick={this.storeQuestionsData}
                              style={btn1Style}
                              />
                  </div>
                </div>
              </div>
            </div>
            </>
        )
      }
}
export default NewQuestion;