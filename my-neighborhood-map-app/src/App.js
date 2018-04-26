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
        venueID: '4b12b802f964a520c28c23e3',
      },
      {
        name: 'Sunflower Cafe',
        position: { lat: 36.1132908, lng: -86.7678391 },
        categories: [
          'Lunch',
          'Dinner',
        ],
        venueID: '508816fce4b0c4120f2ebdbf',
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
        venueID: '571d6d3f498e64cbcffe5473',
      },
      {
        name: 'Coco Greens',
        position: { lat: 36.1520154, lng: -86.80509269999999 },
        categories: [
          'Breakfast',
          'Lunch',
          'Dinner',
          'Snack',
        ],
        venueID: '557df688498e8d9e5ad9343a',
      },
      {
        name: 'The Wild Muffin',
        position: { lat: 36.129007, lng: -86.90273000000002 },
        categories: 'Snack',
        venueID: '5197b2aa498e27b18f30344f',
      },
      {
        name: 'Vegan Vee',
        position: { lat: 36.1494261, lng: -86.84185769999999 },
        categories: [
          'Snack',
        ],
        venueID: '5184192ce4b00b75ac879283',
      },
    ],
  }

  refBtn = React.createRef();

  componentDidMount() {
    this.setFocus();
  }

  updateCategory = (userInput) => {
    this.setState({ selectedCategory: userInput });
  }

  updateSelection = (location, selector) => {
    if (location === this.state.selectedLoc) {
      this.closedInfoWindow();
    } else {
      this.setState({ selectedLoc: location });
      this.setState({ locSelectedFrom: selector });
      if (location !== {} && selector !== '') {
        this.showInfoWindow();
        if(this.state.sidebarIsOpen === false) {
          this.toggleOpenSidebar();
        }
      }
    }
  }

  showInfoWindow = () => {
    this.setState({ showingInfoWindow: true });
  }

  closedInfoWindow = () => {
    this.setState({ showingInfoWindow: false });
    this.updateSelection({}, '');
  }

  toggleOpenSidebar = () => {
    if (this.state.sidebarIsOpen) {
      this.setState({ sidebarIsOpen: false });
    } else {
      this.setState({ sidebarIsOpen: true });
    }
  }

  setFocus = () => {
    this.refBtn.current.focus();
  }

  render() {
    let sidebarIsOpen = this.state.sidebarIsOpen;
    let sidebarClass = (sidebarIsOpen) ?
      "sidebar container sidebar-open" : "sidebar container";
    let mainContentClass = (sidebarIsOpen) ?
      "main-content-pushed" : "main-content-default";
    let btnClass = (sidebarIsOpen) ?
      "btn-container change" : "btn-container";
    let headerClass = (sidebarIsOpen) ?
      "App-title-hide" : "";

    return (
      <div className="App">
        <div role="menu" className={sidebarClass}>
          <h2 className="sidebar-title">Munchin' Categories</h2>
          <LocationFilter
            sidebarIsOpen={this.state.sidebarIsOpen}
            categories={this.state.categories}
            selectedCategory={this.state.selectedCategory}
            passFocusUpToBtn={() => this.setFocus()}
            onSelectFilter={(userInput) => this.updateCategory(userInput)}
          />
          <ListView
            selectedCategory={this.state.selectedCategory}
            locations={this.state.locations}
            selectedLoc={this.state.selectedLoc}
            selector={this.state.locSelectedFrom}
            passFocusUpToBtn={() => this.setFocus()}
            onLocSelect={(location, selector) => this.updateSelection(location, selector)}
          />
        </div>
        <div className={mainContentClass}>
          <header className="App-header container">
            <div
              ref={this.refBtn}
              role="button"
              aria-haspopup="true"
              aria-expanded={sidebarIsOpen}
              tabIndex="0"
              className={btnClass}
              onKeyPress={() => this.toggleOpenSidebar()}
              onClick={() => this.toggleOpenSidebar()}>
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