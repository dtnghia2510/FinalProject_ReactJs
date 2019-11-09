import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ContentItem extends Component {
  onDelete = (id) => {
    if (confirm('Bạn có muốn xóa hay không ?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    var { content, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{content.title}</td>
        <td>
          <img src={content.image} height="50px" width="50px" alt="..." />
        </td>
        <td>{content.category_content}</td>
        <td>
          <Link
            to={'/content/edit/' + content.id}
            className="btn btn-primary mr-2 "
          >
            Sửa
            </Link>
          <button
            type="button"
            className="btn btn-danger "
            onClick={() => this.onDelete(content.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ContentItem;
