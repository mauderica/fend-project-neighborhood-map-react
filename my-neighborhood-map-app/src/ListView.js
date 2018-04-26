import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListView extends Component {
  state = {
    focusFirstItem: false,
  }

  ref = React.createRef();

  registerFocus = (event) => {
    event.stopPropagation();
    this.setState({ focusFirstItem: false });
  }

  enterList = (event) => {
    this.setState({ focusFirstItem: true });
  }

  setFocus = () => {
    this.ref.current.focus();
  }

  passFocusUp = (event) => {
    if (event.key === 'Escape') {
      this.props.passFocusUpToBtn();
    }
  }

  render() {

    const selectedCategory = this.props.selectedCategory;
    let showingLocations = [];
    
    this.props.locations.forEach(location => {
      if (location.categories.includes(selectedCategory) ||
        selectedCategory === 'All' ||
        selectedCategory === 'none-disabled') {
        showingLocations.push(location);
      }
    });

    return (
      <div
        ref={this.ref}
        tabIndex="0"
        role="menu"
        aria-label="dining location options"
        className="list-wrapper"
        onFocus={(event) => this.registerFocus(event)}
        onKeyUp={(event) => this.passFocusUp(event)}
        onKeyPress={(event) => this.enterList(event)}>
        <ul>
          {showingLocations.map((location, index) => (
            (location.categories.includes(selectedCategory) ||
              selectedCategory === 'All' ||
              selectedCategory === 'none-disabled')
            &&
            (<ListItem
              key={index}
              index={index}
              focusFirstItem={this.state.focusFirstItem}
              passFocusUp={() => this.setFocus()}
              location={location}
              selectedLoc={this.props.selectedLoc}
              selector={this.props.selector}
              onLocSelect={(location, selector) => this.props.onLocSelect(location, selector)}
            />)
          ))}
        </ul>
      </div>
    );
  }
}