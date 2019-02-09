import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ClubProfile from '../ClubProfile';

const StackClubProfile = StackNavigator({
    Profile: {
        screen: ClubProfile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'ABOUT KERN RACQUET CLUB',
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
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconcluborg.png')}
                    style={[styles.icon]}
                    />
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

export { StackClubProfile };

