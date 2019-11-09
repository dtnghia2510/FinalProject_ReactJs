import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import HeaderClient from './../Layout/HeaderClient';
import FooterClient from './../Layout/FooterClient';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            username: '',
            password: '',
            loggedInClient:''
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/user?lv=1',
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
        const result2 = user.find( ({ lv }) => lv === 1  );
        // console.log(result0)
        // console.log(result1)
        //Login 
        if (result0 && result1 && result2) {
            localStorage.setItem("token1", this.state.username)
            localStorage.setItem("token2", 1)
            this.setState({
                loggedInClient: true
            });
        }else{
            alert('Tài khoản hoặc mật khẩu không đúng!!');
        }
    }
    render() {
        if (this.state.loggedInClient) {
            return <Redirect to="/" />;
        }
        return (
            <div>
            {/* Header */}
           <HeaderClient/>
           <h1 className="text-center font-italic mt-5 mb-4">Đăng nhập</h1>
           <form onSubmit={this.submitForm} className="text-center mt-1 mb-5">
                    <input type="text" className="form-control font-italic col-md-3 m-auto" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" className="form-control font-italic col-md-3 m-auto" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <button type="submit" className="btn btn-primary font-italic btn-md btn-block col-md-2 m-auto">Login</button>
                    
            </form>
           <FooterClient/>
            
        </div>
        );
    }
}

export default Login;
