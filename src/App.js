import React, {Component} from 'react';
import { View, PermissionsAndroid } from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux';
import PermissionRequireView from './views/PermissionRequireView';
import Store from './store';
import { requestGeolocationPermission } from './utils/Permissions';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {granted: true};
  }

  render() {
    if (!this.state.granted) {
      return (
        <PermissionRequireView
          onGranted={this.setState({granted: true})}/>
      );
    }

    return (
      <Provider style={{ flex: 1 }} store={Store}>
        <Routes />
      </Provider>
    );
  }
}