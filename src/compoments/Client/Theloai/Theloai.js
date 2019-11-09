import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderClient from '../Layout/HeaderClient';
import FooterClient from '../Layout/FooterClient';
import LeftContent from '../LeftContent/LeftContent';
import ContentItem from '../Content/ContentItem';
class Theloai extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theloais: [],
        }
        console.log(this.state);
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            axios({
                method: 'GET',
                url: 'http://localhost:3000/content?category_content=' + id,
                data: null
            }).then(res => {
                this.setState({
                    theloais: res.data
                });
            }).catch(err => {
                console.log(err);
            });

        }
    }
    render() {
        var { theloais } = this.state;
        return (
            <di>
                <HeaderClient />
                <main>
                    <div className="container mt-3">
                        <div className="col-md-8 col-lg-9 float-left mt-2">
                            {this.showtheloai(theloais)}
                        </div>
                        <div className="col-md-4 col-lg-3 mt-2  float-left">
                            <LeftContent></LeftContent>
                        </div>
                    </div>
                </main>
                <FooterClient />
            </di>
        );
    }
    showtheloai(theloais) {
    var result = null;
    if (theloais.length > 0) {
        result = theloais.map((theloai, index) => {
                return (
                    <ContentItem
                        key={index}
                        content={theloai}
                        index={index}
                    />
                    // Nhận lại cái fiel trên để hiển thị ra
                );
        })
    }
    return result;
    }
}
export default Theloai;
