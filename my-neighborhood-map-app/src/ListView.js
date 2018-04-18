import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListView extends Component {

  render() {
    return (
      <div className="list-wrapper">
        <ul>
          {this.props.locations.map((location, index) => (
            // TODO: enable the functionalities for the line below to work
            location.category === this.props.userOption &&
            (<ListItem
                key={index}
                location={location}
                onLocSelect={(location, selector) => this.props.onLocSelect(location, selector)}
              />)
          ))}
        </ul>
      </div>
    );
  }
}