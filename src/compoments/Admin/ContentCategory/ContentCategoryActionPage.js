import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Sidebar from './../Layout/Sidebar';
import Topbar from './../Layout/Topbar';

class ContentCategoryActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtDescription: '',
      txtCreatedOn: '',
      txtCreatedBy: '',
      txtModifiedOn: '',
      txtModifiedBy: ''
    }
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      // console.log(id);
      axios({
        method: 'GET',
        url: 'http://localhost:3000/content_category/' + id,
        data: null
      }).then(res => {
        // console.log(res);
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtDescription: data.description,
          txtCreatedOn: data.created_on,
          txtCreatedBy: data.created_by,
          txtModifiedOn: data.modified_on,
          txtModifiedBy: data.modified_by
        });
      }).catch(err => {
        console.log(err);
      });

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
    var { id, txtName, txtDescription, txtCreatedOn, txtCreatedBy, txtModifiedOn, txtModifiedBy } = this.state;
    var { history } = this.props;
    const token = localStorage.getItem("token");
    const dateTime = require('date-time');
    if (id) {//update
      // console.log('....Updating');
      axios({
        method: 'PUT',
        url: 'http://localhost:3000/content_category/' + id,
        data: {
          name: txtName,
          description: txtDescription,
          created_on: txtCreatedOn,
          created_by: txtCreatedBy,
          modified_on: dateTime(),
          modified_by: token
        }
      }).then(res => {
        // console.log(res);
        history.goBack();
        // history.push("/")
      });
    } else {//create
      axios({
        method: 'POST',
        url: 'http://localhost:3000/content_category',
        data: {
          name: txtName,
          description: txtDescription,
          created_on: dateTime(),
          created_by: token,
          modified_on: txtModifiedOn,
          modified_by: txtModifiedBy

        }
      }).then(res => {
        // console.log(res);
        history.goBack();
        // history.push("/")
      });
    }
  }
  render() {
    var { txtName, txtDescription, txtCreatedOn, txtCreatedBy, txtModifiedOn, txtModifiedBy } = this.state;
    const token = localStorage.getItem("token");
    if (token ==='0') {
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
                  <div className="col-md-12 mt-5">
                    <h3 className="mb-4 font-weight-bold">Thông tin thể loại</h3>
                    <hr />
                    <form onSubmit={this.onSave} className="font-italic">
  
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label >Tên thể loại</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label >Mô tả</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtDescription"
                            value={txtDescription}
                            onChange={this.onChange}
                          />
                        </div>
  
                      </div>
                      <Link to="/contentcategory-list" className="btn btn-danger mr-2">
                        Trở lại
                      </Link>
                      <button type="submit" className="btn btn-primary">Lưu</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
      return <Redirect to="/login" />
    }
  }
}

export default ContentCategoryActionPage;
