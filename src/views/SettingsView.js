import React, { Component } from 'react';
import { View, Text } from 'react-native';
class SettingsView extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SettingsView</Text>
            </View>
        );
    }
}

export default SettingsView;