// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from '../Store/Services/Firebase';
import { StackNoAuthenticated } from './NoAuthenticated/StackNoAuthenticated';
import { ActionSetSesion } from '../Store/Actions/ActionSetSesion';
import { ActionLogout } from '../Store/Actions/ActionLogout';
import { ActionGetLanguage } from '../Store/Actions/ActionGetLanguage';
import { ActionGetDataClub } from '../Store/Actions/ActionGetDataClub';
import { getCurrentLocale } from '../Config/Language/getCurrentLocale';
import TypeUser from './TypeUser';

// create a component
class Selection extends Component {
  componentDidMount() {
    this.props.getLanguages()
    this.props.authentication();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.user ? <TypeUser /> : <StackNoAuthenticated />}
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
      dispatch(ActionGetLanguage(language));
  },
  authentication: () => {
    authentication.onAuthStateChanged((usuario) => {
      if (usuario) {
        dispatch(ActionSetSesion(usuario));
      } else {
        dispatch(ActionLogout());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);

