import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import ListView from './ListView';
import MapContainer from './MapContainer';

class App extends Component {
  state = {
    query: '',
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
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGTckzBEuuWMFPGef0OxueA3RyPGYO4ws',
})(App);