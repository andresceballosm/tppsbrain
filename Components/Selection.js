// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from '../Store/Services/Firebase';
import { StackAuthenticated } from './Authenticated/StackAuthenticated';
import { StackNoAuthenticated } from './NoAuthenticated/StackNoAuthenticated';
import { ActionSetSesion } from '../Store/Actions/ActionSetSesion';
import { ActionLogout } from '../Store/Actions/ActionLogout';
import { ActionGetLanguage } from '../Store/Actions/ActionGetLanguage';
import { getCurrentLocale } from '../Config/Language/getCurrentLocale';
import { AdminRoutes } from './Authenticated/Admin/AdminRoutes';

// create a component
class Selection extends Component {
  componentDidMount() {
    this.props.getLanguages()
    this.props.authentication();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.user ? <AdminRoutes /> : <StackNoAuthenticated />}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  user: state.ReducerSesion,
});

const mapDispatchToProps = dispatch => ({
  getLanguages: () => {
    const language = getCurrentLocale();
      console.log('esto es language en selection',language);
      dispatch(ActionGetLanguage(language));
  },
  authentication: () => {
    // dispatch(actionCreator)
    authentication.onAuthStateChanged((usuario) => {
      if (usuario) {
        dispatch(ActionSetSesion(usuario));
      } else {
        console.log('No existe sesión');
        dispatch(ActionLogout());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);

