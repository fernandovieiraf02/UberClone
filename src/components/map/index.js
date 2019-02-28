import React, { Component, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { HomeViewStyle } from '../../utils/Styles';
import { BLUE_COLOR } from '../../utils/Colors.js';
import Directions from '../Directions';
import { setMapRegion } from '../../actions/MapPlacesActions';
import { setPlaceOrigin } from '../../actions/DirectionsActions';
import { getPixelSize } from '../../utils';
import { Icon } from 'native-base';
import PopulateCarsInMap from '../../utils/PopulateCarsInMap';

const request = {
  directionsServiceBaseUrl: "https://maps.googleapis.com/maps/api/directions/json",
  origin: '',
  waypoints: '',
  destination: '-20.4435,-54.6478', //Campo Grande, MS - BRASIL
  apikey: "AIzaSyCDWnJNrlOQ6X4flZd32EFW7WjFR3PzLiY",
  mode: 'driving',
  language: 'pt',
  request: `${directionsServiceBaseUrl}?origin=${origin}&waypoints=${waypoints}&destination=${destination}&key=${apikey}&mode=${mode}&language=${language}`
};


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { initialRegion: {
			longitude: 0,
			latitude: 0,
			longitudeDelta: 0.0134,
			latitudeDelta: 0.0143
    }};
    this.mapRef = null;
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        const region = {
            ...this.state.initialRegion,
            longitude,
            latitude
        };
        
        //Request to get direction for put random cars in the map
        request.origin = `${latitude},${longitude}`;

        this.setState({initialRegion: region});
        this.props.setMapRegion(region);
        this.props.setPlaceOrigin(region);
        fetchRoute(directionsServiceBaseUrl, origin, waypoints, destination, apikey, mode, language)
        this.directionsRef.fetchRoute(
          request.directionsServiceBaseUrl,
          request.origin,
          request.waypoints,
          request.destination,
          request.apikey,
          request.mode,
          request.language
        ).then( result =>{
          const carsPos = PopulateCarsInMap(0, origin, result.coordinates);
          this.setState({carsPos});
        })
        .catch(err => {alert(err)});
      },
      (error) => alert(error.message)
   );
  }

  render() {
    return (
      <MapView 
        style={ HomeViewStyle.MapView }
        region={this.props.region || this.state.initialRegion}
        initialRegion={this.state.initialRegion}
        showsUserLocation
        followsUserLocation
        loadingEnabled
        loadingIndicatorColor={BLUE_COLOR}
        userLocationAnnotationTitle={'Você'}
        ref={ref => {this.mapRef = ref}}
      >
        <Fragment>
          <Directions onReady={(result) => {
              console.log(result);
              this.mapRef.fitToCoordinates(result.coordinates);
            }}
            ref={el => {this.directionsRef = el}}
          />
          {
            this.props.destination &&
            <Marker 
              coordinate={this.props.destination} 
              anchor={{x: 0, y:0}} 
            />
          }
        </Fragment> 
      </MapView>
    );
  }
}

const mapStatesToProps = (state, props) => {
  const { region } =  state.MapPlacesReducer;
  const { origin, destination } = state.DirectionsReducers;
	return { region, origin, destination };
}

export default connect(mapStatesToProps, { setMapRegion, setPlaceOrigin }, null)(Map);