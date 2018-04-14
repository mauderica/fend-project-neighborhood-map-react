import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import ListView from './ListView';
import MapContainer from './MapContainer';

class App extends Component {
  state = {
    query: '',
    locations: [
      { name: "The Wild Cow", location: { lat: 36.1824707, lng: -86.7354019 } },
      { name: "Sunflower Cafe", location: { lat: 36.1132908, lng: -86.7678391 } },
      { name: "Graze Nashville", location: { lat: 36.1824427, lng: -86.73558109999999 } },
      { name: "AVO", location: { lat: 36.1521497, lng: -86.8201611 } },
      { name: "The Wild Muffin", location: { lat: 36.129007, lng: -86.90273000000002 } },
      { name: "The Southern V Bakery and To-Go Eatery", location: { lat: 36.1804356, lng: -86.80700669999999 } },
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
          <ListView />
        </div>
        <MapContainer google={this.props.google} locations={this.state.locations} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGTckzBEuuWMFPGef0OxueA3RyPGYO4ws',
})(App);