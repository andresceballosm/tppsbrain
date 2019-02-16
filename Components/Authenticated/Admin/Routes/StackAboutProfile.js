import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutProfile from '../ClubProfile/AboutProfile';


const StackAboutProfile = StackNavigator({
    AboutProfile: {
        screen: AboutProfile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'ABOUT PROFILE',
                headerStyle: {
                    backgroundColor: '#312959',
                },
                headerTintColor: '#dfe202',
                headerLeft: (
                    <Icon name="ios-menu" 
                    size={30} 
                    color="#dfe202"
                    style={[styles.menu]}
                    onPress={() => {navigation.navigate('DrawerOpen')}} />
                ),
            }
        },  
    },
});

const styles = StyleSheet.create({
    icon: {
      width: 42,
      height: 42,
    },
    menu: {
        marginLeft: 10
    }
});

export { StackAboutProfile };

