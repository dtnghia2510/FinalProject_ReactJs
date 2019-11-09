import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class LeftMenu extends Component {
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
        <div>
            <h1>Admin</h1>
            <Link to="/logout">Logout</Link>
        </div>
    );
  }
}

export default LeftMenu;
