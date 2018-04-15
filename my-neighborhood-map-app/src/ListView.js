import React, { Component } from 'react';

class ListView extends Component {

  render() {
    return (
      <div className="list-wrapper">
        <ul>
          {this.props.locations.map((location, index) => (
            <li key={index}>
              <p>{location.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListView;
