import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { traslateText } from '../../../Config/Language/Utils';


const fieldNombre = (props) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
        onBlur={props.input.onBlur}
      />
      <View style={styles.linea} />
      {props.meta.touched &&
        props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = traslateText('required');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = traslateText('invalidEmail');
  }

  if (!values.password) {
    errors.password = traslateText('required');
  } else if (values.password.length < 6) {
    errors.password = traslateText('errorMin6');
  } else if (values.password.length > 15) {
    errors.password = traslateText('errorMax6');
  }

  return errors;
};

const SignInForm = (props) => {
  return (
    <View>
      <Field name="email" component={fieldNombre} ph="email@email.com" />
      <Field name="password" component={fieldNombre} ph="******" />
      <Button
        title={traslateText('Btn_login')}
        onPress={props.handleSubmit(props.login)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  linea: {
    //backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
