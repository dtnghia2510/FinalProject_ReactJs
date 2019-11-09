import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Sidebar from './../Layout/Sidebar';
import Topbar from './../Layout/Topbar';
import './sb-admin-2.css';
class Home extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token");
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
  render() {
      if(this.state.loggedIn === false){
            return <Redirect to="/login" />
      }
    return (
        <div id="page-top">
            <div id="wrapper">
                {/* Sidebar */}
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        {/* Topbar */}
                        <Topbar/>
                        {/* Content */}
                        <div className="container-fluid">
                        <h1 className="h3 mb-4 text-gray-800">Xin chào....</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link to="/logout">Logout</Link> */}
        </div>
    );
  }
}

export default Home;
