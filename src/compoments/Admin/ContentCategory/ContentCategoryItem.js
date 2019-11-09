import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContentCategoryItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn có muốn xóa hay không ?')) { //eslint-disable-line
          this.props.onDelete(id);
        }
    }
  render() {
    var { contentcategory, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{contentcategory.name}</td>
        <td>{contentcategory.description}</td>
        <td>
          <Link
            to={'/content-category/edit/' + contentcategory.id}
            className="btn btn-primary mr-2"
          >
            Sửa
            </Link>
            <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(contentcategory.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ContentCategoryItem;
