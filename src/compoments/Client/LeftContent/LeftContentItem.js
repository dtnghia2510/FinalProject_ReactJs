import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class LeftContentItem extends Component {
    render() {
      var { content, index } = this.props;
        return (
            <div className="sidebar-widget">
            <h3>{content.category_content}</h3>
            <div className="sidebar-widget__about-me">
              <div className="sidebar-widget__about-me-image">
              <Link
                to={'/chitiet/' + content.id}
                className="blog-post__footer-link"
              >
              <img src={content.image} width="195px" height="130px" alt="About Me"/>
              </Link>          
              </div>
              <Link
                to={'/chitiet/' + content.id}
                className="blog-post__footer-link"
              >
              {content.title} 
              </Link> 
            </div>
          </div>
        );
    }
}
export default LeftContentItem;
