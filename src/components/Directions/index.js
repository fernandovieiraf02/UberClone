import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { SOFT_BLACK_COLOR } from '../../utils/Colors';

const APIKEY = process.env['GOOGLE_API_KEY'];

class Directions extends Component {
  render() {
    const { destination, origin, onReady } = this.props;
    return (
      <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey={APIKEY}
        strokeWidth={3}
        strokeColor={SOFT_BLACK_COLOR}
      />
    )
  }
};

const mapStatesToProps = (state, props) => {
  return { destination, origin } = state.DirectionsReducers;
}

export default connect(
  mapStatesToProps,
  null,
  null
)
( Directions );