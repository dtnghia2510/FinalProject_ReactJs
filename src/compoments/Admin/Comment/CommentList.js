import React, { Component } from 'react';
class CommentList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover  col-md-12">
        <thead className="col-md-12">
          <tr className="text-center">
            <th>STT</th>
            <th>Code content</th>
            <th>Tên người bình luận</th>
            <th>Nội dung bình luận</th>
            <th>Thời gian đăng bình luận</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default CommentList;
