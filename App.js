import React, {Component} from 'react';
import { StyleSheet, View, YellowBox} from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Selection from './Components/Selection';

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
});
