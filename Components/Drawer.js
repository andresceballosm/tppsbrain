import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView } from 'react-native';
import { createStackNavigator,StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

export const CustomDraweComponent = (props) => (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={require('../Assets/icons/tennis.png')}/>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>      
)

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    viewImage: {
        height: 150, 
        //backgroundColor: 'white', 
        alignItems:'center', 
        justifyContent:'center'
    },
    image: {
        height:120, 
        width:120, 
        borderRadius:60
    }
});