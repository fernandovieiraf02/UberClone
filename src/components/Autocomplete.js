import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { DARK_GRAY } from '../utils/Colors';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Para onde vamos?'
        onPress={() => {}}
        query={{
          key: 'AIzaSyCDWnJNrlOQ6X4flZd32EFW7WjFR3PzLiY',
          language: 'pt'
        }}
        textInputProps={{
          autoCapitalize: 'none',
          autoCorrect: false
        }}
        fetchDetails
        placeholderTextColor={DARK_GRAY}
        enablePoweredByContainer={false}
      />
    );
  }
}

export default Autocomplete;