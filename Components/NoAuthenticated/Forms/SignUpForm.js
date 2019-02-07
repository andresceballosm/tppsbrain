import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { traslateText } from '../../../Config/Language/Utils';

const fieldName = (props) => {
  console.log('inputs');
  return (
    <View style={styles.texInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmation')}
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
  if (!values.name) {
    errors.name = traslateText('required');
  } else if (values.name.length < 5) {
    errors.name = 'deben ser al menos 5 caracteres';
  } else if (values.name.length > 10) {
    errors.name = 'debe ser menor de 10 caracteres';
  }

  if (!values.email) {
    errors.email = traslateText('required');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email invalido';
  }

  if (!values.password) {
    errors.password = traslateText('required');
  } else if (values.password.length < 6) {
    errors.password = traslateText('errorMin6');
  } else if (values.password.length > 15) {
    errors.password = traslateText('errorMax15');
  }

  if (!values.confirmation) {
    errors.confirmation = traslateText('required');
  } else if (values.password !== values.confirmation) {
    errors.confirmation = 'La contraseña debe coincidir';
  }

  return errors;
};

const SignUpForm = (props) => {
  console.log('signupform');
  return (
    <View>
      <Field name="name" component={fieldName} ph={traslateText('name')} />
      <Field name="email" component={fieldName} ph="email@email.com" />
      <Field name="password" component={fieldName} ph="******" />
      <Field name="confirmation" component={fieldName} ph="******" />
      <Button
        title={traslateText('Btn_register')}
        onPress={props.handleSubmit(props.register)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  texInput: {
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
  form: 'SignUpForm',
  validate,
})(SignUpForm);
