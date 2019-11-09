import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtComment: ''
        }
        // console.log("Hellowe",this.state);
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
        const token = localStorage.getItem("token1");
        var { txtComment } = this.state;
        const token1 = localStorage.getItem("token2");
        const dateTime = require('date-time');
        var { content } = this.props;
        if(token1==='1'){
            console.log('ty2', content);
            axios({
                method: 'POST',
                url: 'http://localhost:3000/comment',
                data: {
                    username: token,
                    comment: txtComment,
                    content: content,
                    create_on: dateTime()
                }
            }).then(res => {
                // console.log(res);
                // res.goBack();
                // history.push("/")
                window.location.reload()
            });
        }else{
            window.location.replace("http://localhost:4000/dang-nhap/")
        }
    }
    render() {
        var { txtComment } = this.state;
        return (
            <div>
                <form onSubmit={this.onSave} className="font-italic">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="txtComment"
                                value={txtComment}
                                onChange={this.onChange}
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-5">Gửi bình luận</button>
                </form>
            </div>
        );
    }
}
export default Comment;
