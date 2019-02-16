import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import BraintreeDropIn from 'react-native-braintree-payments-drop-in';
import * as brainTreeUtils from "../../Utils/BraintreeUtils";
import { authentication } from '../../Store/Services/Firebase';


class PaymentsGeneric extends Component {
    constructor() {
        super();

        this.state = {
            clientToken: "",
            amount:"",
            nonce:"",
        };
    }
        
    componentDidMount = () => {
       this.getClientToken();
    };

    getClientToken = async () => {
        await brainTreeUtils.getClientToken({
            merchantAccountID: null,
            customerID: '123456'
        })
        .then(response => {
            if (response.type === "default") {
                let clientToken = response._bodyInit;
                this.setState({clientToken});
            }else{
                console.log('porque no pasa');
            }
        });
    }

    braintreeMethod = (token) => {
        console.log('esto es token',token);
        BraintreeDropIn.show({
            clientToken: token,
          })
          .then(result => {
              const resultNonce = result.nonce
              console.log(resultNonce);
              this.setState({nonce: resultNonce})
            })
          .catch((error) => {
            if (error.code === 'USER_CANCELLATION') {
              // update your UI to handle cancellation
            } else {
              // update your UI to handle other errors
            }
        });
    }
    
    braintreePayment = (nonce, amount) => {
        console.log('nonce braintreePayment', nonce);
        brainTreeUtils.postPurchase({
            nonce,
            amount
        })
        .then(response => {
            console.log('este es el repsonde',response);
        });
    }
    
    render() {
        const { navigation } = this.props
        return (
        <View>
            <TextInput 
                style={styles.input}
                name="amount"
                keyboardType='number-pad'
                onChangeText={(amount) => this.setState({ amount })}
            />
            <Button 
            title="Select Payment Method"
            onPress={() => {this.braintreeMethod(this.state.clientToken)}} 
            />
            <Button 
            title="Pay" 
            onPress={() => {this.braintreePayment(this.state.nonce, this.state.amount)}} 
            /> 
            <Text>{this.state.amount}</Text>
            <Button
            title="Salir"
            onPress={() => {
                authentication.signOut();
            }}
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
      marginBottom: 16,
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1
    },
});

export default PaymentsGeneric;
