import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import {connect} from 'react-redux';
import { ActionRegister } from '../../Store/Actions/ActionRegister';
import SignUpForm from './Forms/SignUpForm';
import {traslateText} from '../../Config/Language/Utils';

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  userRegister = (values) => {
    this.props.register(values);
  }

  render() {
    const { navigation } = this.props;
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex } = this.state
    
    const component1 = () => <Text>Hello</Text>
    const component2 = () => <Text>World</Text>
    const component3 = () => <Text>ButtonGroup</Text>
    return (
      <View style={styles.containerSingUp}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100}} 
        />
        <SignUpForm register={this.userRegister} />
        <Button 
            title={traslateText('Btn_loginSingUp')}
            onPress={() => {
                navigation.goBack
            }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  register: (values) => {
    dispatch(ActionRegister(values));
  },
});

const styles = StyleSheet.create({
  containerSingUp: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
