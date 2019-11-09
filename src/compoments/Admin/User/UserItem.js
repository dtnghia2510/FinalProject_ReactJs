import React, { Component } from 'react';
class UserItem extends Component {
  onDelete = (id) => {
    if (confirm('Bạn có muốn xóa hay không ?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    var { user, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{user.user}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger m-auto "
            onClick={() => this.onDelete(user.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
