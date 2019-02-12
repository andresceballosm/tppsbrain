import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import  ImagePicker  from  'react-native-image-crop-picker' ;
import { Button } from 'react-native-elements';
import SelectNewImage from './SelectNewImage';

const SelectImageSaved = (props) => {
  console.log('propsSelectImage', props);
  
  return (
    <View>
        { props.urlImage ? (
            <SelectNewImage 
            //image={props.image.image}
            load={props.loadImage} 
            urlImage={props.urlImage}
            dataClub={props.dataClub} 
            uid={props.clubUid}
            />
        ):(
            <Image source={require('../../Assets/icons/club-org-seal.png')} 
            style={styles.image} 
            />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: 250, height: 250,
  }
});
export default SelectImageSaved;

