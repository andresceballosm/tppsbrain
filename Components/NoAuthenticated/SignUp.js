import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ImageBackground, 
        ScrollView, ActivityIndicator, Modal } from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';
import {connect} from 'react-redux';
import { ActionRegisterClub } from '../../Store/Actions/ActionRegisterClub';
import SignUpFormAdmin from './Forms/SignUpFormAdmin';
import {traslateText} from '../../Config/Language/Utils';
import { ActionSetLoading } from '../../Store/Actions/ActionApp';
import AlertError from '../Utils/AlertError';

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 1
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  userRegister = (values) => {
    this.props.register(values);
  }

  component1 = () => <Text>{traslateText('selectPlayer')}</Text>
  component2 = () => <Text>{traslateText('selectClub')}</Text>

  render() {
    //const { loading } = this.props;
    const { loading, alertError, navigation } = this.props;
    console.log('alertErrorInSignUp: ',alertError)
    const buttons = [{ element:this.component1 }, { element: this.component2}]
    const { selectedIndex } = this.state

    const LoadingStatus = () => {
      if (loading == 'true')
         return <ActivityIndicator size="large" color="#0000ff" />;
      return null;
    }

    const OpenAlertError = () => {
      if (alertError == true)
         return <AlertError />;
      return null;
    }
    
    return (
      <ImageBackground source={require('../../Assets/images/background.png')} style={{width: '100%', height: '100%'}}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.containerSingUp}>
        <View style={styles.header}>
          <Text style={styles.question}>{traslateText('areyou')}</Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}} 
            selectedButtonStyle={{backgroundColor:'#76bc82'}}
          />
        </View>
        { OpenAlertError() }
        { LoadingStatus()  }
        <View style={styles.body}>
          {this.state.selectedIndex == 1 ? <SignUpFormAdmin register={this.userRegister} /> : <Text>Player</Text>}
          <Button 
            title={traslateText('Btn_loginSingUp')}
            type="clear"
            onPress={() => {
                navigation.goBack()
            }}
          />
        </View> 
      </View>
      </ScrollView> 
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  console.log('state signup:',state)
  return{
    loading: state.app.loading,
    alertError: state.ReducerAlertError.alertError,
  }
};

const mapDispatchToProps = dispatch => ({
  register: (values) => {
    dispatch(ActionSetLoading());
    dispatch(ActionRegisterClub(values));
  },
});

const styles = StyleSheet.create({
  containerSingUp: {
    flex: 1,
    paddingHorizontal: 6,
  },
  header: {
    flex:1,
    justifyContent:'center'
  },
  body: {
    flex:3,
    paddingHorizontal: 12,
  },
  question:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    paddingVertical: 20,
    flex: Platform.OS === 'ios' ? 1 : 0,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
