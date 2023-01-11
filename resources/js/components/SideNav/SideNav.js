import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../About/About';
import Expert from '../TopExperts/Experts';


class SideNav extends Component{
    render(){
        const sideComponentStyle = {
            paddingTop:"401px",
        }
        return(
            <div className="container" style={sideComponentStyle}>
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