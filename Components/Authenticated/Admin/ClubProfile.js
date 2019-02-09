import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from '../../../Store/Services/Firebase';
import  ImagePicker  from  'react-native-image-crop-picker' ;

export class ClubProfile extends Component {
    selectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    } 
    openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
        console.log(image);
        });
    }
    render() {
        return (
        <View>
            <Text> Profile Club </Text>
            <Button
            title="Subir imagen"
            onPress={() => { this.selectImage()}}
            />
            <Button
            title="Tomar foto"
            onPress={() => { this.openCamera()}}
            />
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
      width: 42,
      height: 42,
    },
    menu: {
        marginLeft: 10
    }
});

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile)
