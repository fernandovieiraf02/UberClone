
import React, {Component} from 'react';
import { View } from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux';


export default class App extends Component {
  render() {
    return (
      <Provider style={{ flex: 1 }} store={Store}>
        <Routes />
      </Provider>
    );
  }
}
