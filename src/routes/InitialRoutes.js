import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginView from '../views/LoginView';

const Routes = createStackNavigator(
    {
        Login: {
            screen: LoginView
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

export default Routes;