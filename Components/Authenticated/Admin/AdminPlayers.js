import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

export class AdminPlayers extends Component {
  render() {
    return (
      <View>
        <Text> Players </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  
});

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPlayers)
