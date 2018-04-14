import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

    componentDidMount() {
        this.loadMap();
    }

    componentDidUpdate() {
        this.loadMap();
    }

    // Note: The following resources were consulted to develop the code in the function below:
    // https://medium.com/front-end-hacking/simplified-google-maps-api-in-a-react-app-46981441d2c9
    // https://developers.google.com/maps/documentation/javascript/tutorial
    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            const mapConfig = {
                center: { lat: 36.1521497, lng: -86.8201611 },
                zoom: 12,
                mapTypeId: 'roadmap',
            }

            this.map = new google.maps.Map(node, mapConfig);

            // Add Markers to Map:
            this.props.locations.forEach(location => {
                const marker = new google.maps.Marker({
                    position: location.location,
                    map: this.map,
                    title: location.name
                });
            })

        }
    }

    render() {
        // const style = {
        //     width: '90vw',
        //     height: '75vh'
        //   }

        return (
            <div ref="map" /*style={style}*/ className="map-wrapper">
                loading map...
            </div>
        );
    }
}