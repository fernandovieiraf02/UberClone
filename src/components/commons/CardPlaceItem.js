import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CardPlaceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.container} >
        <Text style={style.text}>{this.props.place}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "black"
    }
})

export default CardPlaceItem;