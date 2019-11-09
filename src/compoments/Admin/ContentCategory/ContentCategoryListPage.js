import React, { Component } from 'react';
import ContentCategoryList from './ContentCategoryList';
import ContentCategoryItem from './ContentCategoryItem';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './../Layout/Sidebar';
import Topbar from './../Layout/Topbar';

class ContentCategoryListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentCategorys: []
    };
  }
  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/content_category',
      data: null
    }).then(res => {
      console.log(res);
      this.setState({
        contentCategorys: res.data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  onDelete = (id) => {
    var { contentCategorys } = this.state;
    axios.delete('http://localhost:3000/content_category/' + id).then(res => {
      if (res.status === 200) {
        var index = this.findIndex(contentCategorys, id)
        if (index !== -1) {
          contentCategorys.splice(index, 1)
          this.setState({
            contentCategorys: contentCategorys
          });
        }
      }
    });
  }

  findIndex = (contentCategorys, id) => {
    var result = -1;
    contentCategorys.forEach((contentCategory, index) => {
      if (contentCategory.id === id) {
        result = index;
      }
    });
    return result;
  }
  render() {
    var { contentCategorys } = this.state;
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
                        <h3 className="card-title mt-3">Danh sách thể loại</h3>
                      </div>
                      <div className="card-body">
                        <Link to="/content-category/add" className="btn btn-primary mb-3 ">
                          Thêm thể loại
                        </Link>
                        <ContentCategoryList>
                          {this.showContentcategorys(contentCategorys)}
                          {/* Chuyền vào 1 props children */}
                        </ContentCategoryList>
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
  showContentcategorys(contentCategorys) {
    var result = null;
    if (contentCategorys.length > 0) {
      result = contentCategorys.map((contentcategory, index) => {
        return (
          <ContentCategoryItem
            key={index}
            contentcategory={contentcategory}
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
export default ContentCategoryListPage;
