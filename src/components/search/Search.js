import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RNGooglePlaces from 'react-native-google-places'; 


class Search extends Component {
  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal()
    .then((place) => {
    console.warn(place);
		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.error(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <View style={{flex: 1, height: 40, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.openSearchModal()}
        >
          <Text>Open Place Picker</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Search;