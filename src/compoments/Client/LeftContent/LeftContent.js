import React, { Component } from 'react';
import LeftContentItem from './LeftContentItem';
import LeftContentCategoriItem from './LeftContentCategoriItem';
import Theloai from './theloai';
import axios from 'axios';
class LeftContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            theloais:[]
        };
    }
    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/content',
            data: null
        }).then(res => {
            // console.log(res);
            this.setState({
                contents: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        var { contents } = this.state;
        return (
            <div>
                <div className="sidebar-widget">
                    <h3 className="text-center">Thể loại</h3>
                    {this.theloai()}
                </div>
                
                {this.showContentItem(contents)}
                <LeftContentCategoriItem></LeftContentCategoriItem>
            </div>
        );
    }
    theloai() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/content_category',
            data: null
        }).then(res => {
            // console.log(res);
            this.setState({
                theloais: res.data
            });
        }).catch(err => {
            console.log(err);
        });
        var { theloais } = this.state;
        var result = null;
        if (theloais.length > 0) {
            result = theloais.map((theloai, index) => {
                return (
                    <Theloai
                        key={index}
                        theloai={theloai}
                        index={index}
                    />
                    // Nhận lại cái fiel trên để hiển thị ra
                );
            })
        }
        return result;
    }
    showContentItem(contents) {
        var result = null;
        if (contents.length > 0) {
            result = contents.slice(4, 6).map((content, index) => {
                return (
                    <LeftContentItem
                        key={index}
                        content={content}
                        index={index}
                    />
                    // Nhận lại cái fiel trên để hiển thị ra
                );
            })
        }
        return result;
    }
}
export default LeftContent;
