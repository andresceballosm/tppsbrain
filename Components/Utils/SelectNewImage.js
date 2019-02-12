import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import  ImagePicker  from  'react-native-image-crop-picker' ;
import { Button } from 'react-native-elements';

const SelectImage = (props) => {
  console.log('propsSelectNewImage', props.urlImage);
  const selectImage = async () => {
    const result = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        props.load(image,props.uid)
      });
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
            <Image source={{ uri: props.image.sourceURL }} 
            style={styles.image} 
          />
        ):(
          //trae la imagen guardada
            <Image source={{ uri: props.urlImage }} 
            style={styles.image} 
            />
        )}
      </TouchableOpacity>
      <Button
      title="Subir imagen"
      type="clear"
      onPress={() => { this.selectImage()}}
      />
      <Button
      title="Tomar foto"
      onPress={() => { this.openCamera()}}
      type="clear"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: 250, height: 250,
  }
});
export default SelectImage;

