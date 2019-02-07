import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

export class ClubProfile extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
              source={require('../../../Assets/icons/icon.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
     render() {
        return (
        <View>
            <Text> Profile Club </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile)
