import React, { Component } from 'react';
import HeaderClient from './../Layout/HeaderClient';
import ContentItem from './../Content/ContentItem';
import PageList from './../PageList/PageList';
import LeftContent from './../LeftContent/LeftContent';
import FooterClient from './../Layout/FooterClient';
import './style.min.css';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: []
        };
    }
    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/content?_sort=created_on&_order=desc,asc&_limit=3',
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
            {/* Header */}
           <HeaderClient/>
           <main>
            <div className="container mt-3">
                <div className="col-md-8 col-lg-9 float-left mt-2">
                    {this.showContents(contents)}
                </div>
                <div className="col-md-4 col-lg-3 mt-2  float-left">
                    <LeftContent></LeftContent>
                </div>
            </div>
           </main>
           <FooterClient/>
        </div>
    );
  }
  showContents(contents) {
    var result = null;
    if (contents.length > 0) {
        result = contents.slice(0, 5).map((content, index) => {
                return (
                    <ContentItem
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
export default Home;
