import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import  ImagePicker from 'react-native-image-crop-picker' ;
import { Button } from 'react-native-elements';

const SelectNewImage = (props) => {
  console.log('propsSelectNewImage', props);
  const platformImage = () => {
    var imagePath = '';
    if(Platform.OS === 'ios'){
      imagePath = props.image.sourceURL
    }else{
      imagePath =  props.image.path;
    }
    return imagePath;
  };

  const selectImage = async () => {
    try {
      await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false
      }).then(image => {
        props.load(image,props.uid)
      });
    } catch (e) {
      console.log(e);
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  const openCamera = () => {
      const result = ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
      })
  }
  return (
    <View>
      <TouchableOpacity onPress={() => { selectImage()}}>
        { props.image ? (
            <Image source={{ uri: platformImage() }} 
            style={styles.image} 
          />
        ):(
            <Image source={{ uri: props.urlImage }} 
            style={styles.image} 
            />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: 250, height: 250,
  }
});
export default SelectNewImage;

