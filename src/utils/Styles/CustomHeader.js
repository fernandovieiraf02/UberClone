import React from 'react';
import { StyleSheet } from 'react-native';
import Dimensions from '../Dimensions';

const CustomHeader = StyleSheet.create({
    container: {
        height: Dimensions.HEADER_HEIGHT, 
        width: Dimensions.HEADER_WIDTH
    }
})

export default CustomHeader;