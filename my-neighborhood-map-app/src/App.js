// Resources consulted:
// https://material.io/icons/#ic_place
// https://developers.google.com/maps/documentation/javascript/symbols

import React, { Component } from 'react';
import './App.css';
import ListView from './ListView';
import MapContainer from './MapContainer';

export default class App extends Component {

// TODO: place icon objects inside state...
  defaultIcon = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    fillColor: "purple",
    fillOpacity: 0.5,
    scale: 2,
    strokeColor: "purple",
    strokeWeight: 2,
  }

  highlightedIcon = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    fillColor: "yellow",
    fillOpacity: 0.5,
    scale: 2,
    strokeColor: "gold",
    strokeWeight: 2,
  }

  state = {
    query: '',
    locations: [
      {
        name: "The Wild Cow",
        location: { lat: 36.1824707, lng: -86.7354019 },
        icon: this.defaultIcon,
      },
      {
        name: "Sunflower Cafe",
        location: { lat: 36.1132908, lng: -86.7678391 },
        icon: this.defaultIcon,
      },
      {
        name: "Graze Nashville",
        location: { lat: 36.1824427, lng: -86.73558109999999 },
        icon: this.defaultIcon,
      },
      {
        name: "AVO",
        location: { lat: 36.1521497, lng: -86.8201611 },
        icon: this.defaultIcon,
      },
      {
        name: "The Wild Muffin",
        location: { lat: 36.129007, lng: -86.90273000000002 },
        icon: this.defaultIcon,
      },
      {
        name: "The Southern V Bakery and To-Go Eatery",
        location: { lat: 36.1804356, lng: -86.80700669999999 },
        icon: this.defaultIcon,
      },
    ],
  }

  updateQuery = (userInput) => {
    this.setState({ query: userInput });
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1>Featured Neighborhood: Nashville</h1>
        </header>
        <div className="sidebar container">
          <div className="location-filter">
            <input type="text" placeholder="Filter locations by..."
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
          <ListView locations={this.state.locations} />
        </div>
        <MapContainer google={this.props.google} locations={this.state.locations} />
      </div>
    );
  }
}