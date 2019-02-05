import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import {StackAuthenticated} from './Components/Authenticated/StackAuthenticated';
import { Privider } from 'react-redux';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackAuthenticated />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
