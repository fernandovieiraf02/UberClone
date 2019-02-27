import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlaceDestination } from '../../actions/DirectionsActions';
import Autocomplete from './Autocomplete';

class Search extends Component {

  handlePlaceSelected (data, details) {
    const { location: { lat: latitude, lng: longitude } } = details.geometry;
    this.props.setPlaceDestination(
      {
        latitude,
        longitude,
        title: data.structured_formatting.main_text
      }
    );
  }

  render() {
    return (
      <Autocomplete handlePlaceSelected={(data, details) => this.handlePlaceSelected(data, details)} />
    );
  }
}

export default connect(null, { setPlaceDestination }, null)(Search);