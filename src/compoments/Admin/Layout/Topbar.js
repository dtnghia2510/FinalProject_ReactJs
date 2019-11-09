import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Topbar extends Component {
    render() {
        const token = localStorage.getItem("token3");
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{token}</span>
                            <img className="img-profile rounded-circle" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/68925494_885052491859665_2186132319234949120_n.jpg?_nc_cat=101&_nc_oc=AQl_-8dfdOECisC9dzezCN1jZgHPpwKduFQonMxI5y868bQA7gdK9fRmogAOsD3ZJOg&_nc_ht=scontent.fdad3-2.fna&oh=9c8cef8597bfa65fd290a9282739622e&oe=5E6562F1" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <Link to="/logout" className="dropdown-item">Đăng xuất</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Topbar;
