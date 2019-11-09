import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderClient from '../Layout/HeaderClient';
import  FooterClient from '../Layout/FooterClient';
class SearchContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: []
        }
    }
    componentDidMount() {
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
    render() {
        var { match } = this.props;
        var id = match.params.id;
        var { contents } = this.state;
        let search = this.state.contents.filter(
            (content) => {
                return content.title.toLowerCase().indexOf(id.toLowerCase()) !== -1;
            }
        );
        return (
            <di>
                <HeaderClient/>
                <div className="container">
                {search.map((content, index) => {
                    return < Item key={index} content={content} />
                })}
                </div>
                <FooterClient/>
            </di>
        );
    }
}
class Item extends Component {
    render() {
        return (
            <div className="sidebar-widget float-left col-md-3 ml-5 mr-4 mt-4">
            <div className="mt-3 ml-1">
            <h3>{this.props.content.category_content}</h3>
            <div className="sidebar-widget__about-me">
              <div className="sidebar-widget__about-me-image">
              <Link
                to={'/chitiet/' + this.props.content.id}
                className="blog-post__footer-link"
              >
              <img src={this.props.content.image} width="195px" height="130px" alt="About Me"/>
              </Link>          
              </div>
              <Link
                to={'/chitiet/' + this.props.content.id}
                className="blog-post__footer-link"
              >
              {this.props.content.title} 
              </Link> 
            </div>
            </div>
          </div>
        );
    }
}
export default SearchContent;
