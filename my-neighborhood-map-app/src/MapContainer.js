// Note: Resources consulted -->
// https://www.npmjs.com/package/google-maps-react#google-map-react-component-tutorial
// https://medium.com/front-end-hacking/simplified-google-maps-api-in-a-react-app-46981441d2c9
// https://developers.google.com/maps/documentation/javascript/tutorial
// https://developers.google.com/maps/documentation/javascript/infowindows

import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, event) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onWindowClose = () => {
        this.setState({
            selectedPlace: {},
            activeMarker: {},
            showingInfoWindow: false
        });
    }

    render() {
        // const style = {
        //     width: '100%', //'90vw'
        //     height: '100%' //'75vh'
        // }

        return (
            <div className="map-wrapper">
                <Map google={this.props.google}
                    // style={style}
                    initialCenter={{
                        lat: 36.158257,
                        lng: -86.77615980000002
                    }}
                    zoom={12}>
                    {this.props.locations.map((location, index) => (
                        <Marker
                            key={index}
                            title={location.name}
                            position={location.location}
                            icon={location.icon}
                            onClick={this.onMarkerClick}
                        />
                    ))}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onWindowClose}>
                        <div>
                            <h2>{this.state.selectedPlace.title}</h2>
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