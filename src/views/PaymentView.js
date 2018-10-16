import React, { Component } from 'react';
import { View, Text } from 'react-native';
class PaymentView extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>PaymentView</Text>
            </View>
        );
    }
}

export default PaymentView;