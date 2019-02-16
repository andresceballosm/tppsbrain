import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Collapsible from '../../Utils/Collapsible';

class ListsAboutClub extends Component {

  render() {
    return (
        <ScrollView style={styles.container}>
            <Collapsible title="A Collapsible with short content text">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Collapsible>
            <Collapsible title="A Collapsible with long content text">
            <Text>Lorem ipsum...</Text>
            </Collapsible>
            <Collapsible title="Another Collapsible">
            <Text>Lorem ipsum dolor sit amet...</Text>
            </Collapsible>
        </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    container:{
        flex            : 1,
        backgroundColor : '#f4f7f9',
        paddingTop      : 30
    }
});

export default ListsAboutClub;