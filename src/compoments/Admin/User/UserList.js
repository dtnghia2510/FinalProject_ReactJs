import React, { Component } from 'react';
class UserList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover  col-md-12">
        <thead className="col-md-12">
          <tr className="text-center">
            <th>STT</th>
            <th>Tên User</th>
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

export default UserList;
