import React from 'react';
import { StyleSheet } from 'react-native';
import Colors, { DARKNESS_BLACK_COLOR, GRAY_COLOR } from '../../Colors';

const CustomDrawerNavigator = StyleSheet.create({
    AvatarContainer: {
        flex: 1, 
        minHeight: 100, 
        maxHeight: 150, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: Colors.DrawerNavigatorAvatar
    },
    AvatarText: {
        color: Colors.DrawerNavigatorAvatarUsername,
        marginLeft: 20,
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400'
    },
    TipContainer: {
        flex: 1, 
        minHeight: 50, 
        maxHeight: 80, 
        backgroundColor: DARKNESS_BLACK_COLOR, 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        paddingLeft: 15,
        paddingVertical: 15
    },
    TipTitle: {
        color: GRAY_COLOR,
        fontSize: 13
    },
    TipText: {
        color: 'white',
        fontSize: 14
    },
    ScrollViewContainer: {
        paddingTop: 20
    },
    SeparatorLine: {
        height: 1, 
        backgroundColor: GRAY_COLOR, 
        opacity: 0.5
    }
})

export default CustomDrawerNavigator;