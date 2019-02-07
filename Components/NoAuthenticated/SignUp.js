import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import { ActionRegister } from '../../Store/Actions/ActionRegister';
import SignUpForm from './Forms/SignUpForm';
import {traslateText} from '../../Config/Language/Utils';

class SignUp extends Component {
  userRegister = (values) => {
    this.props.register(values);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <SignUpForm  register={this.userRegister} />
        <Button 
            title={traslateText('Btn_loginSingUp')}
            onPress={() => {
                navigation.goBack
            }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  register: (values) => {
    dispatch(ActionRegister(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
