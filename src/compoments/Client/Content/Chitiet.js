import React, { Component } from 'react';
import HeaderClient from './../Layout/HeaderClient';
import LeftContent from './../LeftContent/LeftContent';
import FooterClient from './../Layout/FooterClient';
import axios from 'axios';
import Comment from './../Comments/Comment';
class Chitiet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: [],
            txtComment: '',
        }
        console.log(this.state);
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            axios({
                method: 'GET',
                url: 'http://localhost:3000/content/' + id,
                data: null
            }).then(res => {
                this.setState({
                    contents: res.data
                });
            }).catch(err => {
                console.log(err);
            });

        }
    }
    render() {
        return (
            <div>
                {/* Header */}
                <HeaderClient />
                <main>
                    <div className="container mt-3">
                        <div className="col-md-8 col-lg-9 float-left mt-2">
                            <div className="single-post">
                                <div className="single-post__image">
                                    <img src={this.state.contents.image} height="510px" alt="Cup Of Coffee On The Window Sill" />
                                </div>
                                <div className="single-post__title">
                                    <h2>{this.state.contents.title}</h2>
                                </div>
                                <div className="single-post__info">
                                    <span>By {this.state.contents.created_by}</span>
                                    <span>{this.state.contents.created_on}</span>
                                </div>
                                <div className="single-post__content">
                                    <div dangerouslySetInnerHTML={{ __html: this.state.contents.description }}></div>
                                </div>
                            </div>
                            {this.showItemCategory(this.state.contents.id)}
                            <Comment content={this.state.contents.id}    />
                        </div>
                        <div className="col-md-4 col-lg-3 mt-2  float-left">
                            <LeftContent></LeftContent>
                        </div>
                    </div>
                </main>
                <FooterClient />
            </div>
        );
    }
    showItemCategory(e) {
        if (e) {
            return (
                <BinhLuan
                    binhluan={e}
                />
            );
        }

    }
}

class BinhLuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }
    componentWillMount() {
        let { binhluan } = this.props;
        axios({
            method: 'GET',
            url: 'http://localhost:3000/comment?content=' + binhluan,
            data: null
        }).then(res => {
            this.setState({
                comments: res.data
            });
            console.log('hdfsd', this.state);
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        var { comments } = this.state;
        return (
            <div>
                <h3>Bình luận</h3>
                {this.showItemcomment(comments)}
            </div>
        );
    }
    showItemcomment(comments) {
        var result = null;
        if (comments.length > 0) {
            result = comments.map((comment, index) => {
                return (
                    <Ttem
                        key={index}
                        comment={comment}
                        index={index}
                    />
                    // Nhận lại cái fiel trên để hiển thị ra
                );
            })
        }
        return result;
    }
}
class Ttem extends Component {
    render() {
        var { comment } = this.props;
        return (
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-0 text-info">{comment.username}</h5><small className="mt-0 font-italic">{comment.create_on}</small>
                    <p className="ml-3">{comment.comment}</p>
                </div>
            </div>
        );
    }
}


export default Chitiet;
