import React, { Component } from 'react';

class ListView extends Component {

  render() {
    return (
      <div className="list-wrapper">
        <ul>
          {this.props.locations.map((location, index) => (
            <li key={index}>{location.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListView;
