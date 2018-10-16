import React from 'react';
import { StyleSheet } from 'react-native';
import Dimensions from '../Dimensions';

const HomeView = StyleSheet.create({
    EdgeVertical: {
        height: Dimensions.HEIGHT, 
        width: 15, 
        position: 'absolute', 
        left: 0, 
        top: Dimensions.HEADER_HEIGHT, 
        opacity: 0,
        zIndex: 20
    },
    Header: {
        position: 'absolute', 
        top: 0,
        justifyContent: 'flex-start',
        zIndex: 20
    },
    MapView: {
        zIndex: -10,
        position: 'absolute',
        height: Dimensions.HEIGHT,
        width: Dimensions.WIDTH,
        top: 0
    },
    SearchBar: {
        padding: 5, 
        marginTop: 100, 
        marginHorizontal: 10, 
        backgroundColor: 'white', 
        elevation: 4, 
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            width: 1,
            height: 1
        },
        position: 'absolute', 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderBottomLeftRadius: 8, 
        borderBottomRightRadius: 8
    },
    container: {
        height: Dimensions.HEIGHT,
        width: Dimensions.WIDTH
    }
})

export default HomeView;