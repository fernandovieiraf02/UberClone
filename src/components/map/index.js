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
        
        this.setState({initialRegion: region});
        this.props.setMapRegion(region);
        this.props.setPlaceOrigin(region);
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
            this.mapRef.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: getPixelSize(20),
                left: getPixelSize(20),
                top: getPixelSize(20),
                bottom: getPixelSize(20)
            }});
          }}/>
          {
            this.props.destination &&
            <Marker 
              coordinate={this.props.destination} 
              achor={{x: 0, y:0}} 
              icon={<Icon type='FontAwesome' name='square' style={{ margin: 10, marginTop: 18, fontSize: 8 }}/>}
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