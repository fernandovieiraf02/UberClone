import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { DARKNESS_BLACK_COLOR, BLUE_COLOR } from '../utils/Colors';
import { requestGeolocationPermission } from '../utils/Permissions';

class PermissionRequireView extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  handleRequestPermission () {
    requestGeolocationPermission()
    .then( granted => {
      if (granted) {
        this.props.onGranted();
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Para usar o aplicativo é necessário conceder sua permissão para usar a sua geolocalização</Text>
        <TouchableOpacity 
          style={style.button}
          onPress={() => this.handleRequestPermission}>
          <Text style={style.button}>Permitir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = new StyleSheet.create({
  container: {
    backgroundColor: DARKNESS_BLACK_COLOR,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#e4e4e4',
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: DARKNESS_BLACK_COLOR,
    borderColor: BLUE_COLOR,
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
  
export default PermissionRequireView;