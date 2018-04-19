import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListView extends Component {

  render() {

    const selectedCategory = this.props.selectedCategory;

    return (
      <div className="list-wrapper">
        <ul>
          {this.props.locations.map((location, index) => (
            (location.categories.includes(selectedCategory) ||
              selectedCategory === 'All' ||
              selectedCategory === 'none-disabled')
            &&
            (<ListItem
              key={index}
              location={location}
              selectedLoc={this.props.selectedLoc}
              selector={this.props.selector}
              onLocSelect={(location, selector) => this.props.onLocSelect(location, selector)}
            />)
          ))}
        </ul>
      </div>
    );
  }
}