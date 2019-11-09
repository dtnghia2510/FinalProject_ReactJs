import React, { Component } from 'react';
class ContentList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover  col-md-12">
        <thead className="col-md-12">
          <tr className="text-center">
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Ảnh</th>
            <th>Thể loại bài viết</th>
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

export default ContentList;
