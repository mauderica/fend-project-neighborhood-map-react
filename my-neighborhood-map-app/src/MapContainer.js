// Note: Resources consulted -->
// https://www.npmjs.com/package/google-maps-react#google-map-react-component-tutorial
// https://medium.com/front-end-hacking/simplified-google-maps-api-in-a-react-app-46981441d2c9
// https://developers.google.com/maps/documentation/javascript/tutorial
// https://developers.google.com/maps/documentation/javascript/infowindows
// https://material.io/icons/#ic_place
// https://developers.google.com/maps/documentation/javascript/symbols
// https://developers.google.com/maps/documentation/javascript/reference/3/#Size
// https://developers.google.com/maps/documentation/javascript/reference/3/#InfoWindowOptions

import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    state = {
        defaultIcon: {
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "purple",
            fillOpacity: 0.5,
            scale: 2,
            strokeColor: "purple",
            strokeWeight: 2,
            anchor: new this.props.google.maps.Point(11,23),
        },
        highlightedIcon: {
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "yellow",
            fillOpacity: 0.7,
            scale: 2,
            strokeColor: "chocolate",
            strokeWeight: 2.5,
            anchor: new this.props.google.maps.Point(11,23),
        }
    };

    onMarkerClick = (props, marker, event) => {
        this.props.onLocSelect(props.locationObj, 'marker');
    }

    onWindowClose = () => {
        this.props.onWindowClose();
    }

    render() {
        // const style = {
        //     width: '100%', //'90vw'
        //     height: '100%' //'75vh'
        // }
        const highlightedIcon = this.state.highlightedIcon;
        const defaultIcon = this.state.defaultIcon;

        return (
            <div className="map-wrapper">
                <Map google={this.props.google}
                    // style={style}
                    initialCenter={{
                        lat: 36.158257,
                        lng: -86.77615980000002
                    }}
                    zoom={12}>
                    {this.props.locations.map((location, index) => {
                        let icon = (location === this.props.selectedLoc) ? highlightedIcon : defaultIcon;
                        return (<Marker
                            key={index}
                            locationObj={location}
                            title={location.name}
                            position={location.position}
                            icon={icon}
                            onClick={this.onMarkerClick}
                        />)
                    })}
                    <InfoWindow
                        position={this.props.selectedLoc.position}
                        pixelOffset={new this.props.google.maps.Size(0,-43)}
                        visible={this.props.showingInfoWindow}
                        onClose={this.onWindowClose}>
                        <div>
                            <h2>{this.props.selectedLoc.name}</h2>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCGTckzBEuuWMFPGef0OxueA3RyPGYO4ws',
})(MapContainer);