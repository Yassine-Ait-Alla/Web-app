import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Mapp extends Component {
	render() {
		return (
			<div className="App">
				<Map google={this.props.google} zoom={14}>
					<Marker onClick={this.onMarkerClick}
					name={'Current location'} />
					<InfoWindow onClose={this.onInfoWindowClose}>
					<div>
					</div>
					</InfoWindow>
				</Map>
			</div>
			   );
	}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBmQOjzq5Qrc5TmW78SC-PLpCcELGsPd48")
})(Mapp)
