import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { DARK_GRAY, WHITE } from '../../utils/Colors';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = { searchFocused: false };
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Para onde vamos?'
        placeholderTextColor={DARK_GRAY}
        onPress={(data, details) => {this.props.handlePlaceSelected(data, details)}}
        query={{
          key: 'AIzaSyCDWnJNrlOQ6X4flZd32EFW7WjFR3PzLiY',
          language: 'pt'
        }}
        textInputProps={{
          onFocus: () => {this.setState({searchFocused: true})},
          onBlur:  () => {this.setState({searchFocused: false})},
          autoCapitalize: 'none',
          autoCorrect: false
        }}
        fetchDetails
        listViewDisplayed={this.state.searchFocused}
        enablePoweredByContainer={false}
        styles={{
          textInputContainer: {
            backgroundColor: WHITE,
            height: 44,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            flexDirection: 'column',
            justifyContent: 'center'
          },
          textInput: {
            backgroundColor: WHITE,
            height: 28,
            borderRadius: 5,
            paddingTop: 4.5,
            paddingBottom: 4.5,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            fontSize: 15,
            flex: 1
          }
        }}
      />
    );
  }
}

export default Autocomplete;