import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { dataBase, authentication, storage } from '../../../../Store/Services/Firebase';
import { ActionLoadImage,ActionCleanImage } from '../../../../Store/Actions/ActionApp';
import { ActionGetDataClub } from '../../../../Store/Actions/ActionGetDataClub';
import { ActionSetLoading } from '../../../../Store/Actions/ActionApp';
import { ActionGetUrlImage } from '../../../../Store/Actions/ActionGetUrlImage';
import { ActionLogout } from '../../../../Store/Actions/ActionLogout';
import { ActionLoadLocation } from '../../../../Store/Actions/ActionLoadLocation';
import CONSTANTS from '../../../../Store/CONSTANTS';
import AlertError from '../../../Utils/AlertError';
import { Loading } from '../../../Utils/Loading';
import SelectImageSaved from '../../../Utils/SelectSavedImage';
import ClubEditForm from './Forms/clubEditForm';

export class ClubProfile extends Component {
    
    componentDidMount(){
       this.props.getData(this.props.clubUid);
    };
    
    render() {
        const { loading, alertError, initialValues } = this.props;
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
            if(initialValues.load !== null){
                return  (
                    <View>
                        <View>
                            { OpenAlertError() }
                            { LoadingStatus() }
                        </View>
                        <View style={styles.selectImage}> 
                            <View style={styles.viewBanner}>
                                <Image style={styles.banner} source={require('../../../../Assets/icons/tennisAppSuiteBanner.png')}/>
                            </View>  
                            <SelectImageSaved 
                                image={this.props.image}
                                load={this.props.loadImage} 
                                dataClub={this.props.initialValues.data} 
                                urlImage={this.props.urlImage}
                                uid={this.props.clubUid}
                            />
                        </View>
                        <ClubEditForm />
                        <Button
                        title="Salir"
                        onPress={() => {
                            this.props.logout()
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
                    { profile() }
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
    },
    selectImage:{
        alignItems: 'center',
    },
    banner: {
        height:40,
        width:180,
        marginBottom: 10,
        marginTop: 10,
    },
    viewBanner:{
        height:60
    }
});

const mapStateToProps = state => {
    console.log('stateee',state)
    return {
        image: state.ReducerImage.image,
        clubUid: state.ReducerSesion._user.uid,
        initialValues: state.ReducerDataClub,
        dataClub: state.ReducerDataClub,
        urlImage: state.ReducerGetUrlImage,
        loading: state.app.loading,
        alertError: state.ReducerAlertError.alertError,
        dataLocation:state.ReducerDataLocation,
    }
}

const mapDispatchToProps = dispatch => ({
    loadImage: (image, uidClub) => {
        //dispatch(ActionSetLoading());
        dispatch(ActionLoadImage(image, uidClub,CONSTANTS.PATH_LOGO_CLUB));
    },
    loadLocation: (uidClub) => {
        dispatch(ActionSetLoading());
        dispatch(ActionLoadLocation(uidClub));
    },
    loadStaff: (uidClub) => {
        dispatch(ActionSetLoading());
        dispatch(ActionLoadStaff(uidClub));
    },
    loadServices: (uidClub) => {
        dispatch(ActionSetLoading());
        dispatch(ActionLoadServices(uidClub));
    },
    loadFacilities: (uidClub) => {
        dispatch(ActionSetLoading());
        dispatch(ActionLoadFacilities(uidClub));
    },
    cleanImage:() => {
        dispatch(ActionCleanImage())
    },
    getData:(uid) => {
        //dispatch(ActionSetLoading());
        dispatch(ActionGetDataClub(uid));
    },
    logout:()=>{
        authentication.signOut().then((response) => {
            console.log('salio',response)
            dispatch(ActionLogout());
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile)
