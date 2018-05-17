import React, { Component } from 'react';

class GoogleMap extends Component {
// Gets called automatically after component has been rendered to screen
	componentDidMount() {
		// This creates an embedded Google Map
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return (
			// refer to this wit "this.refs.map"
			<div ref="map"></div>
		);
	}
}

export default GoogleMap;
