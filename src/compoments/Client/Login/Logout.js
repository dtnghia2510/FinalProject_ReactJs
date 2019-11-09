import React, { Component } from 'react';

import Home from './../Home/Home';
class Logout extends Component {
  constructor(props){
    super(props)
    localStorage.removeItem("token1");
    localStorage.removeItem("token2");
  }
  render() {
    return (
        <div>
           <Home/>
        </div>
    );
  }
}

export default Logout;
