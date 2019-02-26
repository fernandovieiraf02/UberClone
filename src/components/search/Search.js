import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setPlaceSelected } from '../../actions/MapPlacesActions';
import RNGooglePlaces from 'react-native-google-places'; 


class Search extends Component {
  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal()
    .then(place => {
        this.props.setPlaceSelected(place);
    })
    .catch(error => console.error(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <View style={{flex: 1, height: 40, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.openSearchModal()}
        >
          <Text style={{textAlign:'left'}}>Para onde vamos?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { setPlaceSelected }, null)(Search);