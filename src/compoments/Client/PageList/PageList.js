import React, { Component } from 'react';
class PageList extends Component {
    render() {
        return (
            <nav className="blog-pagination">
                <ul className="blog-pagination__items">
                    <li className="blog-pagination__item  blog-pagination__item--active">
                        <a>1</a>
                    </li>
                    <li className="blog-pagination__item">
                        <a href="#">2</a>
                    </li>
                    <li className="blog-pagination__item">
                        <a href="#">Next Page</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default PageList;
