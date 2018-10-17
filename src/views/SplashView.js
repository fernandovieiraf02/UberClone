import React, { Component } from 'react';
import { View, NativeModules, LayoutAnimation, StyleSheet, Dimensions, Platform } from 'react-native';

const { UIManager } = NativeModules;
const { width, height } = Dimensions.get('window');


if(Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ConfigAnimation = {
    duration: 600,
    /* create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    }, */
    update: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
      springDamping: 0.7
    },
}

class SplashView extends Component {
    constructor(props) {
        super(props);
        this.state = { h: 50, w: 50 };
        LayoutAnimation.configureNext(ConfigAnimation);
        //LayoutAnimation.Presets.spring.duration = 400;
        //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }

    _onPress = () => {
        this.setState({ h: this.state.h + height, w: this.state.w + width });
    }

    componentDidMount() {
        setTimeout(() => {
            this._onPress();
            this.props.navigation.navigate('Home');
        }
            , 1000);
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