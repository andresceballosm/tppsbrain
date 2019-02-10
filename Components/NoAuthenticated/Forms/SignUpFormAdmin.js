import React from 'react';
import { View, Text, StyleSheet, TextInput,  } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';
import { traslateText } from '../../../Config/Language/Utils';

const fieldName = (props) => {
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
        borderBottomWidth={0.2}
      />
      <View style={styles.linea} />
      {props.meta.touched &&
        props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.clubname) {
    errors.clubname = traslateText('required');
  }
  /*
  if (!values.administrator) {
    errors.administrator = traslateText('required');
  }

  if (!values.mainAddress) {
    errors.mainAddress = traslateText('required');
  }

  if (!values.phone) {
    errors.phone = traslateText('required');
  }*/

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
    errors.confirmation = traslateText('errorConfirmationPassword');
  }

  return errors;
};

const SignUpFormAdmin = (props) => {
  console.log('SignUpFormAdmin');
  return (
    <View>
      <Field name="clubname" component={fieldName} ph={traslateText('clubname')} />
      <Field name="administrator" component={fieldName} ph={traslateText('administrator')} />
      <Field name="mainAddress" component={fieldName} ph={traslateText('mainAddress')} />
      <Field name="phone" component={fieldName} ph={traslateText('phone')} />
      <Field name="website" component={fieldName} ph={traslateText('website')} />
      <Field name="email" component={fieldName} ph="email@email.com" />
      <Field name="password" component={fieldName} ph={traslateText('password')} />
      <Field name="confirmation" component={fieldName} ph={traslateText('confirmationpassword')} />
      <Button
        title={traslateText('Btn_register')}
        type="clear"
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
  form: 'SignUpFormAdmin',
  validate,
})(SignUpFormAdmin);
