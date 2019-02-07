import { DrawerNavigator, DrawerItems } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { ClubProfile } from './ClubProfile';
import { AdminPlayers } from './AdminPlayers';
import { CustomDraweComponent } from '../../Drawer';


const AdminRoutes = DrawerNavigator({
    Profile: {
      screen: ClubProfile,
    },
    Players: {
      screen: AdminPlayers,
    },
  },{
    initialRouteName: 'Profile',
    contentComponent : CustomDraweComponent,
    contentOptions:{
      activeTintColor : 'orange'
    }
});


export { AdminRoutes };  