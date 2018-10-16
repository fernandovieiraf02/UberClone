import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import SettingsView from '../views/SettingsView';
import HomeView from '../views/HomeView';
import YourTravelsView from '../views/YourTravelsView';
import HelpView from '../views/HelpView';
import PaymentView from '../views/PaymentView';
import TravelsWithDiscountView from '../views/TravelsWithDiscountView';
import ContentDrawerNavigator from '../components/ContentDrawerNavigator';
import { StringsPT } from '../utils/Strings';


const WithoutLabelItem = Component;
WithoutLabelItem.prototype.render = () => (null);
const Labels = StringsPT.DrawerMenuLabels;

const MainRoutes = createDrawerNavigator(
    {
        Home: {
            screen: HomeView,
            navigationOptions: {
                drawerLabel: <WithoutLabelItem />,
                
            }
        },
        YourTravels: {
            screen: YourTravelsView,
            navigationOptions: {
               title: Labels[0]
            }
        },
        Help: {
            screen: HelpView,
            navigationOptions: {
                title: Labels[1]
            }
        },
        Payment: {
            screen: PaymentView,
            navigationOptions: {
                title: Labels[2]
            }
        },
        TravelsWithDiscount: {
            screen: TravelsWithDiscountView,
            navigationOptions: {
                title: Labels[3]
            }
        },
        Settings: {
            screen: SettingsView,
            navigationOptions: {
                title: Labels[4]
            }
        }
    },
    {
        initialRouteName: 'Home',
        contentComponent: ContentDrawerNavigator
    }
)

export default MainRoutes;