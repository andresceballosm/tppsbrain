import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Platform } from 'react-native';
import  ImagePicker  from  'react-native-image-crop-picker' ;
import { Button } from 'react-native-elements';
import SelectNewImage from './SelectNewImage';

const SelectImageSaved = (props) => {
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
  return (
    <View>
        { props.urlImage ? (
            <SelectNewImage 
            image={props.image}
            load={props.load} 
            urlImage={props.urlImage}
            dataClub={props.dataClub} 
            uid={props.uid}
            />
        ):(
            <TouchableOpacity onPress={() => { selectImage()}}>
            { props.image ? (
                <Image source={{ uri: platformImage() }} 
                style={styles.image} 
             />
             ):(
                <Image source={require('../../Assets/icons/club-org-seal.png')} 
                    style={styles.image} 
                />
             )}      
            </TouchableOpacity>
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

