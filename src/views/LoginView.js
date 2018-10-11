import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

const LoginWithFacebook = () => (
    <LoginButton
        publishPermissions={["email"]}
        onLoginFinished={
        (error, result) => {
            if (error) {
                alert("Login failed with error: " + error.message);
            } else if (result.isCancelled) {
                alert("Login was cancelled");
            } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
            }
        }
        }
        onLogoutFinished={() => alert("User logged out")}
    />
)

class LoginView extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <LoginWithFacebook />
            </View>
        );
    }
}

export default LoginView;