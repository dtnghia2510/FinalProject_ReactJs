import React, { Component } from 'react';
class CommentItem extends Component {
  onDelete = (id) => {
    if (confirm('Bạn có muốn xóa hay không ?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    var { comment, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{comment.content}</td>
        <td>{comment.username}</td>
        <td>{comment.comment}</td>
        <td>{comment.create_on}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger m-auto "
            onClick={() => this.onDelete(comment.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default CommentItem;
