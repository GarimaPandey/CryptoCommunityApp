import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../About/About';
import Expert from '../TopExperts/TopExperts';
class SideNav extends Component{
    render(){
        return(
            <div class="container">
                 <div class="row">
                        <About/>
                    </div>
                    <div clas="row">
                        <Expert/>
                    </div>
                
            </div>
        )
    }
}
export default SideNav;