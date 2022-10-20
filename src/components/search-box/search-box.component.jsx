import React, { Component } from 'react';
import "./search-box.styles.css"

class SearchBox extends Component {
  render() {
    const {onSearchChange} = this.props
    return (
      <div><input
            onChange={onSearchChange}
            className={`search-box ${"search-box"}`}
            type="search"
            placeholder="Search Monsters"
          /> </div>
    )
  }
}export default  SearchBox;
