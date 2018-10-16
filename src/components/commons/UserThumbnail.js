import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Thumbnail, Container, Body, Left, Right, Content } from 'native-base';

const Avatar = (props) => {
    return (
        <View style={ props.containerStyle }>
            <Thumbnail large source={require('../../../assets/icons/user-default.jpeg')}/>
            <Text style={props.textStyle}>{props.username||"Username"}</Text>
        </View>
    )
}

export default Avatar;