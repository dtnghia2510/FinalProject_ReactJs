import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    }
  }
  onChange = (event) => {
    var target = event.target;  
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  showdapnhap(token){
    if(token){
      return(
        <div>
          <kbd className="mr-2">{token}</kbd>
          
          <Link
                  to={'/dang-xuat/'}
                  
                >
                  <i class="fas fa-sign-out-alt"></i>
              </Link>
        </div>
      );
    }else{
      return(
        <div>
        <Link
                to={'/dang-nhap/'}
                
              >
              Login <i class="far fa-user"></i>
            </Link>
            <br/>
        <Link
          to={'/dang-ki/'}
        
         >
         Register <i class="fas fa-user-plus"></i>
        </Link>
        </div>
      );
    }
  }
  render() {
    var {keyword } = this.state;
    const token = localStorage.getItem("token1");
    return (
      <header className="container page-header">
         <div className="float-right">
         {this.showdapnhap(token)}
         </div>
        <div className="page-header__logo">
        
          <div className="logo">
            <h1><a className="logo__link" href="/">Blog It</a></h1>
            <div className="logo__description">Nếu debug là quá trình loại bỏ bug, thì code chính là quá trình gây ra bug</div>
          </div>
        </div>
        
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item  main-nav__item--active">
              <a href="/">Trang chủ</a>
            </li>
            <li className="main-nav__item ml-2">
              <a href="/">Thể Loại</a>
              <ul className="main-nav__items-submenu">
                {/* <li className="main-nav__item-submenu">
                  <a href="category-fullsize.html">Category Fullsize</a>
                </li> */}
              </ul>
            </li>
            <li className="main-nav__item ml-2">
              <a href="/">Giới thiệu</a>
            </li>
            <li className="main-nav__item ml-2">
              <a href="/">Liên hệ</a>
            </li>
            <li className="main-nav__item ml-2">
            <Link
                to={'/bai-viet/'}
                
              >
              Tất Cả
            </Link>
              
            </li>
          </ul>
          <div className="main-nav__search col-md-3">
            <div className="input-group input-group-sm">
              <input
                type="search"
                className="form-control  m-auto sm"
                aria-label="Small" 
                aria-describedby="inputGroup-sizing-sm"
                name="keyword" value={keyword} onChange ={ this.onChange}
              />
              <div className="input-group-prepend  m-auto">
                <Link
                  to={'/search-content/' +this.state.keyword}
                  className="btn btn-outline-secondary"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderClient;
