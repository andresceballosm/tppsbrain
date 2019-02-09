import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AdminPlayers } from '../AdminPlayers';
import { StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const StackPlayers = StackNavigator({
    Profile: {
        screen: AdminPlayers,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'PLAYERS',
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
                    source={require('../../../../Assets/icons/iconplayers.png')}
                    style={[styles.icon, ]}
                    />
                ),
            }    
        },       
    },
    },{
        initialRouteName: 'Profile',
    }
);

const styles = StyleSheet.create({
    icon: {
      width: 42,
      height: 42,
    },
    menu: {
      marginLeft: 10
    }
});

export { StackPlayers };

