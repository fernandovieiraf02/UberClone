import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Header, Left, Icon } from 'native-base';


const HeaderWithMenu = props => (
    <Header transparent>
        <Left>
            <Icon name='menu' onPress={() => props.onClickAction()}/>
        </Left>
    </Header>
)

class HomeView extends Component {    
    render() {
        return (
            <View style={{flex: 1}}>
                <MapView 
                    style={{flex: 1}}
                    initialRegion= {{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                >
                    <HeaderWithMenu onClickAction={() => this.props.navigation.openDrawer()}/>
                </MapView>
            </View>
        )
    }
}

export default HomeView;