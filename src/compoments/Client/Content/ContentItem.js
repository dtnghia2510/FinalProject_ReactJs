import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ContentItem extends Component {
    render() {
        var { content, index } = this.props;
        return (
            <div className="blog-post">
                <div className="blog-post__image">
                    <Link
                        to={'/chitiet/' + content.id}
                        className="blog-post__footer-link"
                        >
                         <img src={content.image} height="510px" alt="No Image" />
                    </Link>
                </div>
                <div className="blog-post__title">
                    <Link
                        to={'/chitiet/' + content.id}
                        className="blog-post__footer-link"
                        >
                         <h4>{content.title} </h4>
                    </Link>  
                </div>
                <div className="blog-post__info">
                    <span>By {content.created_by}</span>
                    <span>{content.created_on}</span>
                </div>
                <div className="blog-post__content">
                    <div dangerouslySetInnerHTML={ { __html: content.summary } }></div>
                </div>
                <div className="blog-post__footer">
                    <Link
                        to={'/chitiet/' + content.id}
                        className="blog-post__footer-link"
                        >
                        Xem thêm
                    </Link>
                </div>
            </div>
        );
    }
}

export default ContentItem;
