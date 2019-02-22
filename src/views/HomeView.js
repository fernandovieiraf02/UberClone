import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import { HomeViewStyle } from '../utils/Styles';
import MapView, { Callout } from 'react-native-maps';
import Header from '../components/CustomHeader';
import { Input, Icon } from 'native-base';
import customMapStyle from '../utils/Styles/CustomMapStyle.json';
import Search from '../components/search/Search';

//Cria uma linha vertical invisivel para permitir abrir o drawer menu 
//=> https://stackoverflow.com/questions/44602642/react-native-drawer-not-opening-on-swipe-over-map/49905612#49905612
const EdgeVertical = props => (
    <View style={ HomeViewStyle.EdgeVertical } />
)

const SearchBar = props => (
    <View style={ HomeViewStyle.SearchBar }>
        <Icon type='FontAwesome' name='square' style={{ margin: 10, fontSize: 8 }}/>
        <Search />
    </View>
)

const FloatView = props => (
    <Animated.View
        
        style={{ position: 'absolute', height: '20%', width: '100%', backgroundColor: '#F00', bottom: 20 }}
    />
)

class HomeView extends Component {
    render() {
        return (
            <View style={ HomeViewStyle.container }>
                <Header onClickAction={() => this.props.navigation.openDrawer()} style={ HomeViewStyle.Header }/>
                <SearchBar/>
                <MapView 
                    style={ HomeViewStyle.MapView }
                    initialRegion= {{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                    followsUserLocation
                    customMapStyle={customMapStyle}
                />
                <EdgeVertical />
            </View>
        )
    }
}

export default HomeView;