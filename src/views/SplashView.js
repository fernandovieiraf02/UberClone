import React, { Component } from 'react';
import { View, Animated, StyleSheet, Dimensions, Platform } from 'react-native';
import SplashNative from 'rn-splash-screen';
const { width, height } = Dimensions.get('window');


class SplashView extends Component {
    constructor(props) {
        super(props);
        this.state = { size: new Animated.Value(50), borderRadius: new Animated.Value(100) };
    }

    _start = () => {
        Animated.parallel([
            Animated.timing(this.state.size, {
                toValue: height + 100,
                duration: 500
            }),
            Animated.timing(this.state.borderRadius, {
                toValue: 1000,
                duration: 500
            })
        ]).start(() => this.props.navigation.navigate('Home'));
    }

    componentDidMount() {
        Platform.OS === 'android' && SplashNative.hide();
        this._start();
    }

    render() {      
        return (
            <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Animated.View style={{ height: this.state.size, width: this.state.size, borderRadius: this.state.borderRadius, backgroundColor: 'white' }}/>
            </View>
        );
    }
}

export default SplashView;