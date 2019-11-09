import React, { Component } from 'react';
import ItemCategory from './ItemCategory';
import axios from 'axios';
class LeftContentCategoriItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contents: []
    };
    const activities = [
        { title: 'Hiking', date: new Date('2019-07-28') },
        { title: 'Shopping', date: new Date('2019-06-10') },
        { title: 'Trekking', date: new Date('2019-08-22') }
      ]
      const sortedActivities = activities.sort((a, b) => b.date - a.date)
    //   console.log("hello",sortedActivities)
}
componentWillMount() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/content',
        data: null
    }).then(res => {
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
            <div className="sidebar-widget">
            <h3>Tin Mới</h3>
            <div className="sidebar-widget__popular">
            {this.showItemCategory(contents)}
            </div>
          </div>
        );
    }
    showItemCategory(contents) {
        const sortdata = contents.sort((a, b) => a.created_on - b.created_on)
        // console.log("koni",sortdata);
      var result = null;
      if (contents.length > 0) {
          result = contents.slice(2, 10).reverse().map((content, index) => {
                  return (
                      <ItemCategory
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
export default LeftContentCategoriItem;
