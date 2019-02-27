import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { SOFT_BLACK_COLOR } from '../../utils/Colors';

class Directions extends Component {
  render() {
    const { destination, origin, onReady } = this.props;
    return (
      <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyCDWnJNrlOQ6X4flZd32EFW7WjFR3PzLiY'
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