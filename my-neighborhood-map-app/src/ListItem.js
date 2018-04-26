import React, { Component } from 'react';
import LocationDetails from './LocationDetails';

export default class ListItem extends Component {
    // ref = React.createRef();

    // componentDidUpdate(prevProps, prevState) {
    //     // IF the dining location options menu was entered && this is the first list item
    //     if (this.props.index === 0 &&
    //         this.props.focusFirstItem === true &&
    //         prevProps.focusFirstItem === false) {
    //         this.focusListItem();
    //     }
    // }

    // onListItemFocus = (event) => {
    //     event.stopPropagation();
    // }

    // focusListItem = () => {
    //     this.ref.current.focus();
    // }

    onListItemSelect = (event) => {
        // event.stopPropagation();
        // this.focusListItem();
        let location = this.props.location;
        this.props.onLocSelect(location, 'list-item');
    }

    // passFocusUp = (event) => {
    //     event.stopPropagation();
    //     if(event.key === 'Escape') {
    //         if(this.props.location === this.props.selectedLoc) {
    //             this.onListItemSelect(event);
    //         } else {
    //             this.props.passFocusUp();
    //         }
    //     }
    // }

    render() {
        let isItemSelected = (this.props.location === this.props.selectedLoc);
        let className = (isItemSelected) ? 'li-selected' : '';

        return (
            <li
                ref={this.ref}
                tabIndex="0"
                role="menuitemradio"
                aria-checked={isItemSelected}
                className={className}
                // onFocus={(event) => this.onListItemFocus(event)}
                // onKeyUp={(event) => this.passFocusUp(event)}
                // onKeyPress={(event) => this.onListItemSelect(event)}
                onClick={(event) => this.onListItemSelect(event)}>
                <p className="list-location-name">{this.props.location.name}</p>
                {
                    isItemSelected &&
                    <LocationDetails
                        venueID={this.props.location.venueID}
                    />
                }
            </li>
        );
    }
}