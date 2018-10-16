import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Thumbnail, Container, Body, Left, Right, Content } from 'native-base';

const Avatar = (props) => {
    return (
        <View style={ props.containerStyle }>
            <Thumbnail large source={require('../../../android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png')}/>
            <Text style={props.textStyle}>{props.username||"Username"} </Text>
        </View>
    )
}

export default Avatar;