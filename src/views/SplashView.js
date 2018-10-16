import React, { Component } from 'react';
import { View, NativeModules, LayoutAnimation, StyleSheet, Dimensions } from 'react-native';

const { UIManager } = NativeModules;
const { width, height } = Dimensions.get('window');

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class SplashView extends Component {
    constructor(props) {
        super(props);
        this.state = { h: 50, w: 50 };
    }

    _onPress = () => {
        LayoutAnimation.spring(() => this.props.navigation.navigate('Home'));
        this.setState({ h: this.state.h + height, w: this.state.w + width });
    }

    componentDidMount() {
        setTimeout( this._onPress, 1000);
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ height: this.state.h, width: this.state.w, borderRadius: 100 + this.state.h, backgroundColor: 'white' }}/>
            </View>
        );
    }
}

export default SplashView;