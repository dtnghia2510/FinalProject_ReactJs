import React, { Component } from 'react';
class ContentCategoryList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead >
          <tr className="text-center">
            <th>STT</th>
            <th>Tên thể loại</th>
            <th>Mô tả</th>
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

export default ContentCategoryList;
