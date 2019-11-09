import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
                    <div className="sidebar-brand-text mx-3">Admin Blog <sup>2</sup></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                    <Link to="/content-list" className="nav-link">Bài viết</Link>
                    <hr className="sidebar-divider" />
                    <Link to="/contentcategory-list" className="nav-link">Thể loại bài viết</Link>
                    <hr className="sidebar-divider" />
                    <Link to="/user-list" className="nav-link">User</Link>
                    <hr className="sidebar-divider" />
                    <Link to="/comment-list" className="nav-link">Bình luận</Link>
                </li>
                
            </ul>
        );
    }
}
export default Sidebar;
