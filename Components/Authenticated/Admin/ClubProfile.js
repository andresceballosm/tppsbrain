import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import { connect } from 'react-redux';
import { dataBase, authentication, storage } from '../../../Store/Services/Firebase';
import { ActionLoadImage,ActionCleanImage } from '../../../Store/Actions/ActionApp';
import { ActionGetDataClub } from '../../../Store/Actions/ActionGetDataClub';
import { ActionSetLoading } from '../../../Store/Actions/ActionApp';
import { ActionGetUrlImage } from '../../../Store/Actions/ActionGetUrlImage';
import CONSTANTS from '../../../Store/CONSTANTS';
import AlertError from '../../Utils/AlertError';
import { Loading } from '../../Utils/Loading';
import SelectImageSaved from '../../Utils/SelectSavedImage';

export class ClubProfile extends Component {
    componentDidMount(){
        console.log('componentDidMOunt',this.props);
       this.props.getData(this.props.clubUid);
    }
    componentWillMount(){
        this.props.cleanImage();
    }
    render() {
        console.log('his.props.urlImage',this.props.urlImage)
        const { loading, alertError, urlImage } = this.props;
        console.log('aquiuii',urlImage);
        const LoadingStatus = () => {
            if (loading == 'true')
               return <Loading />      
            return null;
        }
      
        const OpenAlertError = () => {
        if (alertError == true)
            return <AlertError />;
        return null;
        }
        
        const profile = () => {
            if(urlImage != null){
            console.log('entroooo', urlImage)   
            return  (
                <View>
                    <Text> Profile Club </Text>
                    <View>
                        { OpenAlertError() }
                        { LoadingStatus() }
                    </View>
                    <SelectImageSaved 
                        image={this.props.image}
                        load={this.props.loadImage} 
                        dataClub={this.props.dataClub} 
                        urlImage={this.props.urlImage}
                        uid={this.props.clubUid}
                    />
                    <Button
                    title="Salir"
                    onPress={() => {
                        authentication.signOut();
                    }}
                    />
                 </View> 
            )         
            }else{
                return (
                    <View> 
                    <Text>Loading...</Text>
                    { LoadingStatus() }
                    </View>
                )
            }  
               
        }
        return (
            <View style={styles.container}>
                {profile()}
            </View>
        ) 
    }
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
});

const mapStateToProps = state => {
    console.log('stateee',state)
    return {
        image: state.ReducerImage.image,
        clubUid: state.ReducerSesion._user.uid,
        dataClub: state.ReducerDataClub,
        urlImage: state.ReducerGetUrlImage,
        loading: state.app.loading,
        alertError: state.ReducerAlertError.alertError,
    }
}

const mapDispatchToProps = dispatch => ({
    loadImage: (image, uidClub) => {
        dispatch(ActionSetLoading());
        dispatch(ActionLoadImage(image, uidClub,CONSTANTS.PATH_LOGO_CLUB));
    },
    cleanImage:() => {
        dispatch(ActionCleanImage())
    },
    getData:(uid) => {
        dispatch(ActionSetLoading());
        dispatch(ActionGetDataClub(uid));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile)
