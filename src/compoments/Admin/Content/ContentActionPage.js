import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import CKEditor from 'ckeditor4-react';
import Sidebar from './../Layout/Sidebar';
import Topbar from './../Layout/Topbar';
import './../Home/sb-admin-2.css';
class ContentActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtCategorycontent: '',
            txtDescription: '',
            txtImage: '',
            txtTitle: '',
            txtSummary: '',
            txtCreatedOn: '',
            txtCreatedBy: '',
            txtModifiedOn: '',
            txtModifiedBy: '',
            category: [],
            loggedIn: ''
        }
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSummaryChange = this.onSummaryChange.bind(this);
    }
    onDescriptionChange(evt) {
        this.setState({
            txtDescription: evt.editor.getData()
        });
    }
    onSummaryChange(evt) {
        this.setState({
            txtSummary: evt.editor.getData()
        });

    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/content_category',
            data: null
        }).then(res => {
            this.setState({
                category: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            // console.log(id);
            axios({
                method: 'GET',
                url: 'http://localhost:3000/content/' + id,
                data: null
            }).then(res => {
                // console.log(res);
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtCategorycontent: data.category_content,
                    txtDescription: data.description,
                    txtImage: data.image,
                    txtTitle: data.title,
                    txtSummary: data.summary,
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
        var { id, txtCategorycontent, txtDescription, txtImage, txtTitle, txtSummary, txtCreatedOn, txtCreatedBy, txtModifiedOn, txtModifiedBy } = this.state;
        var { history } = this.props;
        const token = localStorage.getItem("token");
        const dateTime = require('date-time');
        if (id) {//update
            // console.log('....Updating');
            axios({
                method: 'PUT',
                url: 'http://localhost:3000/content/' + id,
                data: {
                    category_content: txtCategorycontent,
                    description: txtDescription,
                    image: txtImage.replace(/C:\\fakepath\\/i, "/images/"),
                    title: txtTitle,
                    summary: txtSummary,
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
                url: 'http://localhost:3000/content',
                data: {
                    category_content: txtCategorycontent,
                    description: txtDescription,
                    image: txtImage.replace(/C:\\fakepath\\/i, "/images/"),
                    title: txtTitle,
                    summary: txtSummary,
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
        var { txtCategorycontent, txtDescription, txtImage, txtTitle, txtSummary } = this.state;
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
                                    <div className="col-md-12 mt-5 mb-5">
                                        <h3 className="mb-4 font-weight-bold">THÔNG TIN BÀI VIẾT</h3>
                                        <hr />
                                        <form onSubmit={this.onSave} className="font-italic">

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label >Tiêu đề</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="txtTitle"
                                                        value={txtTitle}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label >Nội dung (*)</label>
                                                    <CKEditor
                                                        data={txtDescription}
                                                        onChange={this.onDescriptionChange}
                                                        onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}

                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Tóm tắt (*)</label>
                                                    <CKEditor
                                                        data={txtSummary}
                                                        onChange={this.onSummaryChange}
                                                        onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label>Content Category:</label>
                                                    <select value={txtCategorycontent} name="txtCategorycontent" className="form-control" onChange={this.onChange}>
                                                        {this.state.category.map((categorys, i) => {
                                                            return <option key={i} value={categorys.name}>{categorys.name}</option>;
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label >Hình ảnh</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="txtImage"
                                                        onChange={this.onChange}
                                                    />
                                                    <p name="txtImage">{txtImage}</p>

                                                </div>

                                            </div>
                                            <Link to="/content-list" className="btn btn-danger mr-2">
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
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default ContentActionPage;
