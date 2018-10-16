import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../Colors';

const CustomDrawerNavigator = StyleSheet.create({
    AvatarContainer: {
        flex: 1/4, 
        minHeight: 100, 
        maxHeight: 150, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        backgroundColor: Colors.DrawerNavigatorAvatar
    },
    AvatarText: {
        color: Colors.DrawerNavigatorAvatarUsername
    },
    ScrollViewContainer: {
        paddingTop: 20
    }
})

export default CustomDrawerNavigator;