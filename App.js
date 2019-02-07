import React, {Component} from 'react';
import { StyleSheet, View, YellowBox} from 'react-native';
import { Provider } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Store from './Store/Store';
import Selection from './Components/Selection';


YellowBox.ignoreWarnings(['Require cycle:']);
export default class App extends Component {
  render() {
    //const gradient = 'linear-gradient('rgb(20, 90, 50)', 'rgb(106, 98, 132)')';
    return (
      <View style={styles.container}>
      <Provider store={Store}>  
      <LinearGradient colors={[ 'rgba(0,0,0,0.8)', 'transparent']} style={styles.linearGradient}
       >
        <Selection />
      </LinearGradient>  
      </Provider>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
});
