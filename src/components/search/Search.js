import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setPlaceSelected } from '../../actions/MapPlacesActions';
import Autocomplete from '../Autocomplete';

class Search extends Component {
  render() {
    return (
      <Autocomplete />
    );
  }
}

export default connect(null, { setPlaceSelected }, null)(Search);