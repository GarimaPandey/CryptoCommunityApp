import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuestionRow from './QuestionRow';

class Questions extends Component {

    constructor(props){
        super(props);

        this.state = {
            questions: [],
        }
    }

    //lifecycle method called when component is mounted
    componentDidMount() {
        this.getQuestionList();
    }


    //get Question list
    getQuestionList = () => {
        let self = this;
        axios.get('/get/question/list').then(function(response){
            console.log(response.data);
            self.setState({
                questions:response.data
            });
        });
    }
    render(){
        const myStyle={
            position:"10px"
        }
    return (
        <div class="container"style={myStyle} >
        <div class="accordion" id="accordionExample">
            {
                this.state.questions.map(function(x,i){
                    return <QuestionRow key={i} data={x}/>
                })
            }   
        </div>
    </div>

        )};
}
  
export default Questions;
