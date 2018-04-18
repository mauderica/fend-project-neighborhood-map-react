// Resources consulted:

import React, { Component } from 'react';
import './App.css';
import ListView from './ListView';
import MapContainer from './MapContainer';

export default class App extends Component {
  state = {
    query: '',
    selectedLoc: {},
    locSelectedFrom: '', // 'marker' or 'list-item'
    showingInfoWindow: false,
    locations: [
      {
        name: "The Wild Cow",
        position: { lat: 36.1824707, lng: -86.7354019 },
      },
      {
        name: "Sunflower Cafe",
        position: { lat: 36.1132908, lng: -86.7678391 },
      },
      {
        name: "Graze Nashville",
        position: { lat: 36.1824427, lng: -86.73558109999999 },
      },
      {
        name: "AVO",
        position: { lat: 36.1521497, lng: -86.8201611 },
      },
      {
        name: "The Wild Muffin",
        position: { lat: 36.129007, lng: -86.90273000000002 },
      },
      {
        name: "The Southern V Bakery and To-Go Eatery",
        position: { lat: 36.1804356, lng: -86.80700669999999 },
      },
    ],
  }

  updateQuery = (userInput) => {
    this.setState({ query: userInput });
  }

  updateSelection = (location, selector) => {
    this.setState({ selectedLoc: location });
    this.setState({ locSelectedFrom: selector });
    this.showInfoWindow();
  }

  showInfoWindow = () => {
    this.setState({ showingInfoWindow: true });
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
          <ListView
            locations={this.state.locations}
            onLocSelect={(location, selector) => this.updateSelection(location, selector)}
          />
        </div>
        <MapContainer
          google={this.props.google}
          locations={this.state.locations}
          selectedLoc={this.state.selectedLoc}
          showingInfoWindow={this.state.showingInfoWindow}
          onLocSelect={(location, selector) => this.updateSelection(location, selector)}
        />
      </div>
    );
  }
}