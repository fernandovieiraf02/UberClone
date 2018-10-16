import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LoginView extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text>LoginView</Text>
            </View>
        );
    }
}

export default LoginView;