import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { HomeViewStyle } from '../../utils/Styles';
import { BLUE_COLOR } from '../../utils/Colors.js';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { initialRegion: {
			longitude: 0,
			latitude: 0,
			longitudeDelta: 0.0134,
			latitudeDelta: 0.0143
		}};
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({coords: { latitude, longitude }}) => {
         this.setState({ ...this.state.initialRegion, ...coords });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
   );
  }

  render() {
    let places = {latitude: 0, longitude:0, longitudeDelta: 0.0134, latitudeDelta: 0.0143};
		if (this.props.places) {
			places = {...places, ...this.props.places};
		}

    return (
      <MapView 
					style={ HomeViewStyle.MapView }
					region={places}
					initialRegion={this.state.initialRegion}
					showsUserLocation
					followsUserLocation
					loadingEnabled
					loadingIndicatorColor={BLUE_COLOR}
					userLocationAnnotationTitle={'Você'}/>
    );
  }
}

const mapStatesToProps = (state, props) => {
	const { places } =  state.MapPlacesReducer;
	return { places };
}

export default connect(mapStatesToProps, null, null)(Map);