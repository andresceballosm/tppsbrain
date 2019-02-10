import React from 'react';
import { View, Text, TouchableHighlight, Modal} from 'react-native';
import {connect} from 'react-redux';
import { ActionCloseModal } from '../../Store/Actions/ActionApp';

const ModalError= (props) => {
    console.log('modal visible:', props.modal);
    return (
    <View style={{marginTop: 22}}>    
    <Modal
        animationType="slide"
        transparent={false}
        visible={true}
        onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
        <View>
            <Text>Hello World!</Text>
            <Text>Hide Modal</Text>
            <TouchableHighlight
                onPress={() => {
                  props.closeModal();
                }}>
                <Text>Hide Modal</Text>
            </TouchableHighlight>
        </View>
        </View>
    </Modal>
    </View>
    );
};

const mapStateToProps = state => {
    return{
        modal: state.ReducerModal.modal,
    }   
  };
  
const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        console.log('dispatch closeModal');
        dispatch(ActionCloseModal());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalError);  
