import React from 'react';
import { View, Text, StyleSheet, TextInput,  } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';
import { traslateText } from '../../../../Config/Language/Utils';

const fieldName = (props) => {
  return (
    <View style={styles.field}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        textContentType={props.ContentType}
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
  
  if (!values.administrator) {
    errors.administrator = traslateText('required');
  }

  if (!values.mainAddress) {
    errors.mainAddress = traslateText('required');
  }

  if (!values.phone) {
    errors.phone = traslateText('required');
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
    errors.confirmation = traslateText('errorConfirmationPassword');
  }

  return errors;
};

const ClubEditForm = (props) => {
  return (
    <View>
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('clubname')}</Text>  
            <Field name="clubname" component={fieldName} ContentType='none' />
        </View>
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('administrator')}</Text>  
            <Field name="administrator" component={fieldName} ContentType='none' />
        </View>  
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('mainAddress')}</Text>  
            <Field name="mainAddress" component={fieldName} ContentType='addressCity' />
        </View>  
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('phone')}</Text>  
            <Field name="phone" component={fieldName}  ContentType='telephoneNumber' />
        </View>  
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('website')}</Text>  
            <Field name="website" component={fieldName} ContentType='none' />
        </View>  
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('email')}</Text>  
            <Field name="email" component={fieldName} ContentType='none' />
        </View>  
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('password')}</Text>  
            <Field name="password" component={fieldName}  ContentType='none' />
        </View>  
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('confirmationpassword')}</Text>  
            <Field name="confirmation" component={fieldName} ContentType='none' />
        </View>        
      <Button
        title={traslateText('Btn_register')}
        type="clear"
        onPress={props.handleSubmit(props.editClub)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  texInput: {
    marginBottom: 10,
    flex: 1, 
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  inputName:{
    flex: 1
  },
  field:{
    flex: 2
  },
  linea: {
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm({
  form: 'ClubEditForm',
  validate,
})(ClubEditForm);
