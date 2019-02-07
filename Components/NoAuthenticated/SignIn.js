import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Forms/SignInForm';
import {traslateText} from '../../Config/Language/Utils';
import { ActionLogin } from '../../Store/Actions/ActionLogin';

// create a component
class SignIn extends Component {
  userLogin= (values) => {
    this.props.login(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.userLogin} />
        <Button
          title={traslateText('Btn_signUp')}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
});

// make this component available to the app

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    dispatch(ActionLogin(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

