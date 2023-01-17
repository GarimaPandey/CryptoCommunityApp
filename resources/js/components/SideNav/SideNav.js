import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../About/About';
import Expert from '../TopExperts/Experts';


class SideNav extends Component{
    render(){
        const sideComponentStyle = {
            marginTop:"10px",
            marginLeft:"17px",
        }
        return(
            <div className="container">
                 <div className="row">
                        <About/>
                    </div>
                    <div className="row">
                        <Expert/>
                    </div>
                
            </div>
        )
    }
}
export default SideNav;