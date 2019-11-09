import React, { Component } from 'react';
import ContentList from './ContentList';
import ContentItem from './ContentItem';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './../Layout/Sidebar';
import Topbar from './../Layout/Topbar';
import './../sb-admin-2.css';

class ContentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }
  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/content',
      data: null
    }).then(res => {
      console.log(res);
      this.setState({
        contents: res.data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  onDelete = (id) => {
    var { contents } = this.state;
    axios.delete('http://localhost:3000/content/' + id).then(res => {
      if (res.status === 200) {
        var index = this.findIndex(contents, id)
        if (index !== -1) {
          contents.splice(index, 1)
          this.setState({
            contents: contents
          });
        }
      }
    });
  }

  findIndex = (contents, id) => {
    var result = -1;
    contents.forEach((content, index) => {
      if (content.id === id) {
        result = index;
      }
    });
    return result;
  }
  render() {
    var { contents } = this.state;
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
                        <h3 className="card-title mt-3">Danh sách bài viết</h3>
                      </div>
                      <div className="card-body">
                        <Link to="/content/add" className="btn btn-primary mb-3 ">
                          Thêm bài viết
                      </Link>
                        <ContentList>
                          {this.showContents(contents)}
                          {/* Chuyền vào 1 props children */}
                        </ContentList>
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
  showContents(contents) {
    var result = null;
    if (contents.length > 0) {
      result = contents.map((content, index) => {
        return (
          <ContentItem
            key={index}
            content={content}
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
export default ContentListPage;
