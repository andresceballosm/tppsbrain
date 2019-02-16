import React from 'react';
import { Alert, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ActionOpenAlertError } from '../../Store/Actions/ActionApp';
import {traslateText} from '../../Config/Language/Utils';
import {connect} from 'react-redux';

const AlertError= (props) => {
    const { error } = props;
    const showAlert = () =>{
        var message = '';
        if(error == 'auth/email-already-in-use'){
            message = traslateText('errorEmailInUse');
        }else{
            message = error;
        }
        Alert.alert(
           message
        )
    }
    return (
        <View>
            { showAlert()}
        </View>
    )   
}

const styles = StyleSheet.create ({
    button: {
       backgroundColor: '#4ba37b',
       width: 100,
       borderRadius: 50,
       alignItems: 'center',
       marginTop: 100
    }
 });

const mapStateToProps = state => {
    return{
        error: state.ReducerAlertError.error.code,
    }   
  };
  
const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(ActionOpenAlertError());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertError);  