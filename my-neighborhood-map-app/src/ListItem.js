import React, { Component } from 'react';
import LocationDetails from './LocationDetails';

export default class ListItem extends Component {

    onListItemClick = (listItem) => {
        let location = this.props.location;
        this.props.onLocSelect(location, 'list-item');
    }

    render() {
        let isItemSelected = (this.props.location === this.props.selectedLoc); // && this.props.selector === 'list-item'
        let className = (isItemSelected) ? 'li-selected' : '';

        return (
            <li className={className} onClick={(event) => { this.onListItemClick(event.target) }}>
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