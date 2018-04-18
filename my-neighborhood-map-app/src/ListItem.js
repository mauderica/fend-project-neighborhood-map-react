import React, { Component } from 'react';

export default class ListItem extends Component {

    onListItemClick = (listItem) => {
        let location = this.props.location;
        this.props.onLocSelect(location, 'list-item');
    }

    render() {
        return (
            <li className="list-item" onClick={(event) => { this.onListItemClick(event.target) }}>
                <p className="list-location-name">{this.props.location.name}</p>
            </li>
        );
    }
}