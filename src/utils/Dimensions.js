import React, { Component } from 'react';
import { Dimensions, Platform, StatusBar } from 'react-native';

const WIDTH= Dimensions.get('window').width;
const HEIGHT= Dimensions.get('window').height;

const DIMENSIONS = {
    WIDTH,
    HEIGHT,
    HEADER_HEIGHT: 60,
    HEADER_WIDTH: WIDTH,
    STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
}

export default DIMENSIONS;