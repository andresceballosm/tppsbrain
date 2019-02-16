import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import  ImagePicker from 'react-native-image-crop-picker' ;
import { Button } from 'react-native-elements';
import { LoadingSmall } from '../Utils/LoadingSmall';

const SelectNewImage = (props) => {
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
            <Image loadingIndicatorSource={() => <LoadingSmall />} source={{ uri: platformImage() }} 
            style={styles.image} 
          />
        ):(
        <Image loadingIndicatorSource={() => <LoadingSmall />} source={{ uri: props.urlImage }} 
            style={styles.image} 
            />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: 200, height: 200,
  }
});
export default SelectNewImage;

