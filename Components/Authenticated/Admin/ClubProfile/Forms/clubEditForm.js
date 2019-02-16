import React,{ Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity  } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { Field, reduxForm, initialize } from 'redux-form';
import { traslateText } from '../../../../../Config/Language/Utils';
import Collapsible from '../../../../Utils/Collapsible'
import { LoopStaff, LoopLocations } from '../ClubProfileCollapsible';

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
      />
      <View style={styles.linea} />
      {props.meta.touched &&
        props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  );
};


class ClubEditForm extends Component {
  editRegister = () => {
    const values = this.props.formEdit.ClubEditForm.values;
    this.props.editClubProfile(values);
  };
  
  render(){   
  const {initialValues} = this.props.initialValues
  //this.props.initialize(this.props.initialValues.data);
  return (
     <View tyle={styles.container}>
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('clubname')}</Text>  
            <Field name="clubname" component={fieldName} ContentType='none' />
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
        <ScrollView style={styles.container}>
          <Collapsible title="Locations">
              <LoopLocations  data={this.props.dataLocation}/>
          </Collapsible>  
          <Collapsible title="Staff">
              <LoopStaff data={this.props.dataStaff} />
          </Collapsible>
          <Collapsible title="Services">
              <Text>
              </Text>
          </Collapsible>     
          <Collapsible title="Facilities">
              <Text>
              </Text>
          </Collapsible>   
        </ScrollView>
        <View style={styles.texInput}>
            <Text style={styles.inputName}>{traslateText('email')}</Text>  
            <Field name="email" component={fieldName} ContentType='none' />
        </View>  
      <Button
        title={traslateText('Btn_register')}
        type="clear"
        onPress={()=>{ this.editRegister() }}
      />
    </View>
  )
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  texInput: {
    marginBottom: 10,
    flex: 1, 
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    paddingTop: 10,
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
const mapStateToProps = (state) => {
  return {
      clubUid: state.ReducerSesion._user.uid,
      formEdit: state.form,
      loading: state.app.loading,
      alertError: state.ReducerAlertError.alertError,
      dataLocation:state.ReducerDataLocation,

      image: state.ReducerImage.image,
      initialValues: state.ReducerDataClub,
      dataFacilities: state.ReducerDataFacilities,
      dataServices: state.ReducerDataServices,
      dataStaff: state.ReducerDataStaff,
      urlImage: state.ReducerGetUrlImage,
  }
}

const mapDispatchToProps = dispatch => ({
  editClubProfile: (values) => {
      //dispatch(ActionSetLoading());
      //dispatch(ActionRegisterClub(values));
  },
})

export default (connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ClubEditForm',
  enableReinitialize: true,
  validate,
})(ClubEditForm)));
