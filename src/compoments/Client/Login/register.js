import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import HeaderClient from './../Layout/HeaderClient';
import FooterClient from './../Layout/FooterClient';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            username: '',
            password: '',
            confirmpassword: '',
            loggedInClient: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        var {username,password,confirmpassword} =this.state;
        if(password === confirmpassword){
            localStorage.setItem("token1", username)
            localStorage.setItem("token2", 1)
            axios({
                method: 'POST',
                url: 'http://localhost:3000/user',
                data: {
                    user: username,
                    pass: password,
                    lv: 1
                }
            }).then(res => {
                // console.log(res);
                // res.goBack();
                // history.push("/")
                // window.location.reload()
                this.setState({
                    loggedInClient: true
                });
            }); 
        }
            
    }
    render() {
        if (this.state.loggedInClient) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                {/* Header */}
                <HeaderClient />
                <h1 className="text-center font-italic mt-5 mb-4">Đăng kí</h1>
                <form onSubmit={this.onSave} className="text-center mt-1 mb-5">
                    <input type="text" className="form-control font-italic col-md-3 m-auto" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" className="form-control font-italic col-md-3 m-auto" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="password" className="form-control font-italic col-md-3 m-auto" placeholder="confirm password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.onChange} />
                    <br />
                    <button type="submit" className="btn btn-primary font-italic btn-md btn-block col-md-2 m-auto">Đăng kí</button>
                </form>
                <FooterClient />
            </div>
        );
    }
}

export default Register;
