import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

    componentDidMount() {
        this.loadMap();
    }
    
    componentDidUpdate() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;

            // Note: The below was written in part with the help of the following blog article
            // https://medium.com/front-end-hacking/simplified-google-maps-api-in-a-react-app-46981441d2c9
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            const mapConfig = {
                center: { lat: 40.7485722, lng: -74.0068633 },
                zoom: 11,
                mapTypeId: 'roadmap',
            }

            this.map = new google.maps.Map(node, mapConfig);

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