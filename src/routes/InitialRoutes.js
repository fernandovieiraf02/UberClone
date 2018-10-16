import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginView from '../views/LoginView';
import SplashView from '../views/SplashView';

const Routes = createStackNavigator(
    {
        Splash: {
            screen: SplashView
        },
        Login: {
            screen: LoginView
        }
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none'
    }
)

export default Routes;