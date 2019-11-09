import React from 'react';
import NotFoudPage from './compoments/Admin/NotFoudPage/NotFoudPage';
import Login from './compoments/Login';
import Logout from './compoments/Logout';
import Home from './compoments/Admin/Home/Home';
import ContentCategoryListPage from './compoments/Admin/ContentCategory/ContentCategoryListPage';
import ContentCategoryActionPage from './compoments/Admin/ContentCategory/ContentCategoryActionPage';
import ContentListPage from './compoments/Admin/Content/ContentListPage';
import ContentActionPage from './compoments/Admin/Content/ContentActionPage';
import UserListPage from './compoments/Admin/User/UserListPage';
import CommentListPage from './compoments/Admin/Comment/CommentListPage';
// Client
import HomeClient from './compoments/Client/Home/Home';
import Chitiet from './compoments/Client/Content/Chitiet';
import SearchContent from './compoments/Client/Home/SearchContent';
import Content from './compoments/Client/Home/Content';
import LoginClient from './compoments//Client/Login/Login';
import LogoutClient from './compoments//Client/Login/Logout';
import Register from './compoments/Client/Login/register';
import Theloaiclient from './compoments/Client/Theloai/Theloai';
const routes =[
    {
        path : '/',
        exact: true,
        main: () => <HomeClient/>
    },
    {
        path: '/login',
        exact: false,
        main: ()=> <Login/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/logout',
        exact: false,
        main: ()=> <Logout/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/dang-nhap',
        exact: false,
        main: ()=> <LoginClient/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/dang-xuat',
        exact: false,
        main: ()=> <LogoutClient/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/dang-ki',
        exact: false,
        main: ()=> <Register/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/admin',
        exact: false,
        main: ()=> <Home/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/user-list',
        exact: false,
        main: (history)=><UserListPage history = {history}/>
    },
    {
        path: '/comment-list',
        exact: false,
        main: (history)=><CommentListPage history = {history}/>
    },
    {
        path: '/contentcategory-list',
        exact: false,
        main: (history)=><ContentCategoryListPage history = {history}/>
    },
    {
        path: '/content-category/add',
        exact: false,
        main: ({history})=><ContentCategoryActionPage history={history} />
    },
    {
        path: '/content-category/edit/:id',
        exact: false,
        main: ({match, history})=><ContentCategoryActionPage match={match} history={history}/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/content-list',
        exact: false,
        main: ()=><ContentListPage/>
    },
    {
        path: '/content/add',
        exact: false,
        main: ({history})=><ContentActionPage history={history} />
    },
    {
        path: '/content/edit/:id',
        exact: false,
        main: ({match, history})=><ContentActionPage match={match} history={history}/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/chitiet/:id',
        exact: false,
        main: ({match})=> <Chitiet match={match}/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/search-content/:id',
        exact: false,
        main: ({match})=> <SearchContent match={match}/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/the-loai/:id',
        exact: false,
        main: ({match})=> <Theloaiclient match={match}/>
        //Lấy đối tượng id - (Match)
    },
    {
        path: '/bai-viet',
        exact: false,
        main: ()=> <Content/>
        //Lấy đối tượng id - (Match)
    },
    {
        path : '',
        exact: false,
        main: () => <NotFoudPage/>
    }
];
export default routes;