import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Theloai extends Component {
    render() {
      var { theloai, index } = this.props;
        return (
            <div>
              <a 
              className="blog-post__footer-link"
              href={'/the-loai/' + theloai.name}>
                {theloai.name}
              </a>

          </div>
        );
    }
}
export default Theloai;
