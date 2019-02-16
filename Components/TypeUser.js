// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { dataBase } from '../Store/Services/Firebase';
import { ActionTypeUSer } from '../Store/Actions/ActionTypeUser';
import { ActionGetDataClub } from '../Store/Actions/ActionGetDataClub';
import { ActionSetLoading } from '../Store/Actions/ActionApp';
import { AdminRoutes } from './Authenticated/Admin/Routes/AdminRoutes';
import { PlayerRoutes } from './Authenticated/Players/Routes/PlayerRoutes';

// create a component
class TypeUSer extends Component {
  componentDidMount() {
    this.props.getTypeUser(this.props.userUid);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.typeUser == 'admin' ? <AdminRoutes screenProps={this.props.setting} /> : <PlayerRoutes />}
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
    userUid: state.ReducerSesion._user.uid,
    typeUser: state.ReducerTypeUser,
    setting: state.ReducerSettingClub,
});

const mapDispatchToProps = dispatch => ({
  getTypeUser: (uid) => {
    var userRef = dataBase.collection('users').doc(uid);
    userRef.get().then((data) => {
        if(data.exists){
        dispatch(ActionTypeUSer(data._data.type))
        dispatch(ActionSetLoading());
        dispatch(ActionGetDataClub(uid));
        }else{
        console.log('No such document!');
        }
    })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeUSer);

