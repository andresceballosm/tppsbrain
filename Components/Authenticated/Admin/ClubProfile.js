import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from '../../../Store/Services/Firebase';
import { ActionLoadImage,ActionCleanImage } from '../../../Store/Actions/ActionApp'
import SelectImage from '../../Utils/SelectImage';

export class ClubProfile extends Component {
    componentWillMount(){
        this.props.cleanImage();
    }
    render() {
        return (
        <View style={styles.container}>
            <Text> Profile Club </Text>
            <SelectImage image={this.props.image.image} load={this.props.loadImage} />
            <Button
            title="Salir"
            onPress={() => {
                authentication.signOut();
            }}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

const mapStateToProps = state => ({
    image: state.ReducerImage,
})


const mapDispatchToProps = dispatch => ({
    loadImage: (image) => {
        dispatch(ActionLoadImage(image))
    },
    cleanImage:() => {
        dispatch(ActionCleanImage())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile)
