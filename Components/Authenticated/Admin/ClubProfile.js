import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from '../../../Store/Services/Firebase';
import Icon from 'react-native-vector-icons/Ionicons';

export class ClubProfile extends Component {
    static navigationOptions = ({ navigation }) => {
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
                onPress={() => {navigation.navigate('DrawerOpen')}} />
            ),
            drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('../../../Assets/icons/icon.png')}
                  style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        };
    };

     render() {
        return (
        <View>
            <Text> Profile Club </Text>
            <Button
            title="Salir"
            onPress={() => {
                authentication.signOut();
            }}
            />
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
