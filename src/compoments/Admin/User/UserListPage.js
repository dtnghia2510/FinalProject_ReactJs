import React, { Component } from 'react';
import UserList from './UserList';
import UserItem from './UserItem';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './../Layout/Sidebar';
import Topbar from './../Layout/Topbar';
import './../sb-admin-2.css';

class UserListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/user?lv=1',
      data: null
    }).then(res => {
      console.log(res);
      this.setState({
        users: res.data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  onDelete = (id) => {
    var { users } = this.state;
    axios.delete('http://localhost:3000/user/' + id).then(res => {
      if (res.status === 200) {
        var index = this.findIndex(users, id)
        if (index !== -1) {
            users.splice(index, 1)
          this.setState({
            users: users
          });
        }
      }
    });
  }

  findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
      if (user.id === id) {
        result = index;
      }
    });
    return result;
  }
  render() {
    var { users } = this.state;
    const token = localStorage.getItem("token");
    if (token === '0') {
      //Cú pháp iS6
      return (
        <div id="page-top">
          <div id="wrapper">
            {/* Sidebar */}
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                {/* Topbar */}
                <Topbar />
                {/* Content */}
                <div class="container-fluid">
                  <div className="col-md-12">
                    <div className="card mt-5">
                      <div className="card-header bg-light">
                        <h3 className="card-title mt-3">Danh sách user</h3>
                      </div>
                      <div className="card-body">
                        <UserList>
                          {this.showContents(users)}
                          {/* Chuyền vào 1 props children */}
                        </UserList>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Link to="/logout">Logout</Link> */}
        </div>
      );
    } else {
      return <Redirect to="/login" />
    }
  }
  showContents(users) {
    var result = null;
    if (users.length > 0) {
      result = users.map((user, index) => {
        return (
          <UserItem
            key={index}
            user={user}
            index={index}
            onDelete={this.onDelete}
          />
          // Nhận lại cái fiel trên để hiển thị ra
        );
      })
    }
    return result;
  }
}
export default UserListPage;
