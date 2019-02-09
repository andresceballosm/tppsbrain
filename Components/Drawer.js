import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, 
          SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomDraweComponent = (props) => (
  <ImageBackground source={require('../Assets/images/slide.png')} 
    style={{width: '100%', height:'100%'}}
  >
    <SafeAreaView style={styles.safeArea}>
      <View>
          <View style={styles.header}>
            <Text style={styles.version}>Version : 1.0.1</Text>
            <Icon name="ios-close" 
              size={40} 
              color="#312959"
              style={[styles.close]}
              onPress={() => {props.navigation.navigate('DrawerClose')}} 
            />
          </View>
          <View style={styles.headerImage}>
            <Image style={styles.banner} source={require('../Assets/icons/tennisAppSuiteBanner.png')}/>
            <Image style={styles.image} source={require('../Assets/icons/club-org-seal.png')}/>
          </View>    
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </View>
    </SafeAreaView>   
  </ImageBackground>     
)

const styles = StyleSheet.create({
    safeArea: {
      flex: 1
    },
    header: {
      flexDirection: 'row',
      height: 30,
    },
    headerImage: {
      height: 200, 
      alignItems:'center', 
      justifyContent:'center'
    },
    image: {
        height:120, 
        width:120, 
        borderRadius:60
    }, 
    banner: {
        height:60,
        width:240,
    },
    version: {
      marginLeft: 10
    },
    close: {
      marginLeft: 130
    }
});