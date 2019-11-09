import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentItem from './CommentItem';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './../Layout/Sidebar';
import Topbar from './../Layout/Topbar';
import './../sb-admin-2.css';

class CommentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/comment?_sort=create_on&_order=desc,asc',
      data: null
    }).then(res => {
      console.log(res);
      this.setState({
        comments: res.data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  onDelete = (id) => {
    var { comments } = this.state;
    axios.delete('http://localhost:3000/comment/' + id).then(res => {
      if (res.status === 200) {
        var index = this.findIndex(comments, id)
        if (index !== -1) {
          comments.splice(index, 1)
          this.setState({
            comments: comments
          });
        }
      }
    });
  }

  findIndex = (comments, id) => {
    var result = -1;
    comments.forEach((comment, index) => {
      if (comment.id === id) {
        result = index;
      }
    });
    return result;
  }
  render() {
    var { comments } = this.state;
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
                        <h3 className="card-title mt-3">Danh sách Bình luận</h3>
                      </div>
                      <div className="card-body">
                        <CommentList>
                          {this.showContents(comments)}
                          {/* Chuyền vào 1 props children */}
                        </CommentList>
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
  showContents(comments) {
    var result = null;
    if (comments.length > 0) {
      result = comments.map((comment, index) => {
        return (
          <CommentItem
            key={index}
            comment={comment}
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
export default CommentListPage;
