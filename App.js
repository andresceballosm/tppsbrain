import React, {Component} from 'react';
import { StyleSheet, View, YellowBox} from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Selection from './Components/Selection';


YellowBox.ignoreWarnings(['Require cycle:']);
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Provider store={Store}>  
        <Selection />
      </Provider>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
});
