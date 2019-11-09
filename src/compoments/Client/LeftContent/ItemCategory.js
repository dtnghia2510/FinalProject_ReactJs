import React, { Component } from 'react';
class ItemCategory extends Component {
    render() {
      var { content } = this.props;
        return (
              <div className="sidebar-widget__popular-item row">
                <div className="sidebar-widget__popular-item-image">
                <a href={/chitiet/ +content.id}><img src={content.image} width="60px" height="60px"  alt="Flower Bedroom Ideas"/></a>
                </div>
                <div className="sidebar-widget__popular-item-info">
                  <div className="sidebar-widget__popular-item-date">
                    <span>{content.created_on}</span>
                  </div>
                  <div className="sidebar-widget__popular-item-content">
                    <a href={/chitiet/ +content.id}>{content.title}</a>
                  </div>
                </div>
              </div>
        );
    }
}
export default ItemCategory;
