import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import SignUpForm from './Forms/SignUpForm';

export default class SignUp extends Component {
  userRegister = (values) => {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <SignUpForm />
        <Button 
            title="SignIn"
            onPress={() => {
                navigation.goBack
            }}
        />
      </View>
    );
  }
}
