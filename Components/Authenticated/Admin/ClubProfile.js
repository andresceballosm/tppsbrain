import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ActivityIndicator, Modal, Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { dataBase, authentication, storage } from '../../../Store/Services/Firebase';
import { ActionLoadImage,ActionCleanImage } from '../../../Store/Actions/ActionApp';
import { ActionGetDataClub } from '../../../Store/Actions/ActionGetDataClub';
import { ActionSetLoading } from '../../../Store/Actions/ActionApp';
import { ActionGetUrlImage } from '../../../Store/Actions/ActionGetUrlImage';
import { ActionLogout } from '../../../Store/Actions/ActionLogout';
import CONSTANTS from '../../../Store/CONSTANTS';
import AlertError from '../../Utils/AlertError';
import { Loading } from '../../Utils/Loading';
import SelectImageSaved from '../../Utils/SelectSavedImage';
import ClubEditForm from './Forms/clubEditForm';

export class ClubProfile extends Component {
    componentDidMount(){
       this.props.getData(this.props.clubUid);
    };

    componentWillMount(){
        this.props.cleanImage();
    };

    editRegister = (values) => {
        this.props.editClubProfile(values);
    };
    render() {
        const { loading, alertError, urlImage, dataClub } = this.props;
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
            if(dataClub != null){
                return  (
                    <View>
                        <Text> Profile </Text>
                        <View>
                            { OpenAlertError() }
                            { LoadingStatus() }
                        </View>
                        <View style={styles.selectImage}>
                            
                        <SelectImageSaved 
                            image={this.props.image}
                            load={this.props.loadImage} 
                            dataClub={this.props.dataClub} 
                            urlImage={this.props.urlImage}
                            uid={this.props.clubUid}
                        />
                        <ClubEditForm initialValues={this.props.initialValues} editClub={this.editRegister} />
                        </View>
                        <Button
                        title="Salir"
                        onPress={() => {
                            this.props.logout()
                            //authentication.signOut();
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
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    {profile()}
                </View>
            </ScrollView>
        ) 
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 20,
        flex: Platform.OS === 'ios' ? 1 : 0,
    },
    selectImage:{
        alignItems: 'center',
    }
});

const mapStateToProps = state => {
    console.log('stateee',state)
    return {
        image: state.ReducerImage.image,
        clubUid: state.ReducerSesion._user.uid,
        dataClub: state.ReducerDataClub,
        initialValues: state.ReducerDataClub,
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
    logout:()=>{
        authentication.signOut().then((response) => {
            console.log('salio')
            dispatch(ActionLogout());
        })
    },
    editClubProfile: (values) => {
        dispatch(ActionSetLoading());
        dispatch(ActionRegisterClub(values));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile)
