// Resources consulted:
// https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
// https://reactjs.org/docs/faq-ajax.html
// http://www.stevebrown.co/journal/creating-a-local-venue-app-using-reactredux-with-the-foursquare-api-part-i
// https://developer.foursquare.com/

import React, { Component } from 'react';
import credentials from './credentials';

export default class LocationDetails extends Component {
    state = {
        error: null,
        isLoaded: false,
        venueDetails: {},
    }

    componentDidMount() {
        const venueID = this.props.venueID;
        const venueEndpoint = 'https://api.foursquare.com/v2/venues/' + venueID;
        const params = {
            client_id: credentials.client_id,
            client_secret: credentials.client_secret,
            v: "20180323",
        };

        fetch(`${venueEndpoint}?${new URLSearchParams(params)}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        venueDetails: result.response.venue
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, venueDetails } = this.state;
        if (error) {
            return (
                <div className="location-details">
                    <div>Oops! Location details could not be loaded.</div>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="location-details">
                    <div>Loading...</div>
                </div>
            );
        } else {
            let venueRating = (venueDetails.rating !== undefined) ? venueDetails.rating : "None currently";
            return (
                <div className="location-details">
                    <div>{venueDetails.contact.formattedPhone}</div>
                    <div>Price range: {venueDetails.price.currency}</div>
                    <div>Rating: {venueRating}</div>
                    <div className="details-foursquare">Details provided by Foursquare</div>
                </div>
            );
        }
    }
}