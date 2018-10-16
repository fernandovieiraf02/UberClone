import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { HomeViewStyle } from '../utils/Styles';
import MapView from 'react-native-maps';
import Header from '../components/CustomHeader';

//Cria uma linha vertical invisivel para permitir abrir o drawer menu 
//=> https://stackoverflow.com/questions/44602642/react-native-drawer-not-opening-on-swipe-over-map/49905612#49905612
const EdgeVertical = props => (
    <View style={ HomeViewStyle.EdgeVertical } />
)

class HomeView extends Component {
    render() {
        return (
            <View style={ HomeView.container }>
                <Header onClickAction={() => this.props.navigation.openDrawer()} style={ HomeViewStyle.Header }/>
                <MapView 
                    style={ HomeViewStyle.MapView }
                    initialRegion= {{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                />
                <EdgeVertical />
            </View>
        )
    }
}

export default HomeView;