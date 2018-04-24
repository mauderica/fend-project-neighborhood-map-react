// Resources consulted:

import React, { Component } from 'react';
import './App.css';
import LocationFilter from './LocationFilter';
import ListView from './ListView';
import MapContainer from './MapContainer';

export default class App extends Component {
  state = {
    sidebarIsOpen: false,
    selectedCategory: 'none-disabled',
    categories: [
      'Breakfast',
      'Lunch',
      'Dinner',
      'Snack',
    ],
    selectedLoc: {},
    locSelectedFrom: '', // 'marker' or 'list-item'
    showingInfoWindow: false,
    locations: [
      {
        name: 'The Wild Cow',
        position: { lat: 36.1824707, lng: -86.7354019 },
        categories: [
          'Lunch',
          'Dinner',
        ],
      },
      {
        name: 'Sunflower Cafe',
        position: { lat: 36.1132908, lng: -86.7678391 },
        categories: [
          'Lunch',
          'Dinner',
        ],
      },
      {
        name: 'Graze Nashville',
        position: { lat: 36.1824427, lng: -86.73558109999999 },
        categories: [
          'Breakfast',
          'Lunch',
          'Dinner',
          'Snack',
        ],
      },
      {
        name: 'AVO',
        position: { lat: 36.1521497, lng: -86.8201611 },
        categories: [
          'Breakfast',
          'Lunch',
          'Dinner',
          'Snack',
        ],
      },
      {
        name: 'The Wild Muffin',
        position: { lat: 36.129007, lng: -86.90273000000002 },
        categories: 'Snack',
      },
      {
        name: 'The Southern V Bakery and To-Go Eatery',
        position: { lat: 36.1804356, lng: -86.80700669999999 },
        categories: [
          'Breakfast',
          'Lunch',
          'Dinner',
        ],
      },
    ],
  }

  updateCategory = (userInput) => {
    this.setState({ selectedCategory: userInput });
  }

  updateSelection = (location, selector) => {
    this.setState({ selectedLoc: location });
    this.setState({ locSelectedFrom: selector });
    this.showInfoWindow();
  }

  showInfoWindow = () => {
    this.setState({ showingInfoWindow: true });
  }

  closedInfoWindow = () => {
    this.setState({ showingInfoWindow: false });
  toggleOpenSidebar = () => {
    if (this.state.sidebarIsOpen) {
      this.setState({ sidebarIsOpen: false });
    } else {
      this.setState({ sidebarIsOpen: true });
    }
  }

  render() {

    let sidebarIsOpen = this.state.sidebarIsOpen;
    let sidebarClass = (sidebarIsOpen) ?
      "sidebar container sidebar-open" :
      "sidebar container";
    let mainContentClass = (sidebarIsOpen) ?
      "main-content-pushed" :
      "main-content-default";
    let btnClass = (sidebarIsOpen) ?
      "btn-container change" :
      "btn-container";
    let headerClass = (sidebarIsOpen) ?
      "App-title-hide" :
      "";

    return (
      <div className="App">
        <div className={sidebarClass}>
          <h2 className="sidebar-title">Munchin' Categories</h2>
          <LocationFilter
            categories={this.state.categories}
            selectedCategory={this.state.selectedCategory}
            onSelectFilter={(userInput) => this.updateCategory(userInput)}
          />
          <ListView
            selectedCategory={this.state.selectedCategory}
            locations={this.state.locations}
            selectedLoc={this.state.selectedLoc}
            selector={this.state.locSelectedFrom}
            onLocSelect={(location, selector) => this.updateSelection(location, selector)}
          />
        </div>
        <div className={mainContentClass}>
          <header className="App-header container">
            <div className={btnClass} onClick={() => this.toggleOpenSidebar()}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <h1 className={headerClass}>Vegan in Nashville</h1>
          </header>
          <MapContainer
            google={this.props.google}
            sidebarIsOpen={this.state.sidebarIsOpen}
            selectedCategory={this.state.selectedCategory}
            locations={this.state.locations}
            selectedLoc={this.state.selectedLoc}
            showingInfoWindow={this.state.showingInfoWindow}
            onLocSelect={(location, selector) => this.updateSelection(location, selector)}
            onWindowClose={() => this.closedInfoWindow()}
          />
        </div>
      </div>
    );
  }
}