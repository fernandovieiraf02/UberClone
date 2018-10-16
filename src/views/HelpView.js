import React, { Component } from 'react';
import { View, Text } from 'react-native';
class HelpView extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HelpView</Text>
            </View>
        );
    }
}

export default HelpView;