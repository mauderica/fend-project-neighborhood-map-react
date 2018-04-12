import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    query: '',
  }

  updateQuery = (userInput) => {
    this.setState({ query: userInput });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Featured Neighborhood: Nashville</h1>
        </header>
        <div className="location-filter">
          <input type="text" placeholder="Filter locations by..."
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)} />
        </div>
      </div>
    );
  }
}

export default App;
