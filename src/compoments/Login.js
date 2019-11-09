import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props);
        // const token = localStorage.getItem("token");
        // let loggedIn = true
        // if (token == null) {
        //     loggedIn = false
        // }
        this.state = {
            user: [],
            username: '',
            password: '',
            loggedIn:''
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/user?lv=0',
            data: null
        }).then(res => {
            this.setState({
                user: res.data,
            });
        }).catch(err => {
            console.log(err);
        });
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitForm(e) {
        e.preventDefault()
        const { user,username, password } = this.state
        const result0 = user.find( ({ user }) => user === username  );
        const result1 = user.find( ({ pass }) => pass === password  );
        // console.log(result0)
        // console.log(result1)
        //Login 
        if (result0 && result1) {
            localStorage.setItem("token", 0)
            localStorage.setItem("token3", username)
            this.setState({
                loggedIn: 'Admin'
            });
        }else{
            alert('Tài khoản hoặc mật khẩu không đúng!!');
        }

    }
    render() {
        if (this.state.loggedIn === 'Admin') {
            return <Redirect to="/admin" />
        }
        return (
            <div className="col-md-12 mt-5">
                <br /><br />
                <h1 className="text-center font-italic mt-5 mb-5">Login Admin</h1>
                <form onSubmit={this.submitForm} className="text-center ">
                    <input type="text" className="form-control font-italic col-md-3 m-auto" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" className="form-control font-italic col-md-3 m-auto" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <button type="submit" className="btn btn-primary font-italic btn-md btn-block col-md-2 m-auto">Login</button>
                    
                </form>

            </div>
        );
    }
}

export default Login;
