import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { authentication } from '../../../../Store/Services/Firebase';
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
import  AboutClubForm  from './Forms/AboutClubForm';
import { traslateText } from '../../../../Config/Language/Utils';
 
export class AboutProfile extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation)
        const backgroundcolor = navigation.getParam('institutionalcolor')
        return {
            headerTitle: 'ABOUT PROFILE',
            headerStyle: {
                backgroundColor: backgroundcolor ? backgroundcolor : '#ffffff',
            },
            headerTintColor: '#dfe202',
            headerLeft: (
                <Icon name="ios-menu" 
                size={30} 
                color="#dfe202"
                style={[styles.menu]}
                onPress={() => {navigation.navigate('DrawerOpen')}} />
            ),
        }
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('nextProps',nextProps)
        if (nextProps.settings !== this.props.settings) {
           this.props.navigation.setParams(nextProps.settings);
        }
    }

    render() {
        const { loading, alertError, initialValues, settings } = this.props;

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
                        <View style={styles.texInput}>
                            <Text style={styles.inputName}>{traslateText('clubname')}</Text>
                            <Text style={styles.field}>{this.props.initialValues.data.clubname}</Text>
                        </View>
                        <View style={styles.selectImage}>   
                            <SelectImageSaved 
                                image={this.props.image}
                                load={this.props.loadImage} 
                                dataClub={this.props.initialValues.data} 
                                urlImage={this.props.urlImage}
                                uid={this.props.clubUid}
                            />
                        </View>
                        <AboutClubForm 
                            initialValues={this.props.initialValues} 
                            dataLocation={this.props.dataLocation}
                            dataFacilities={this.props.dataFacilities}
                            dataServices={this.props.dataServices}
                            dataStaff={this.props.dataStaff}
                            uid={this.props.clubUid}
                        />
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
        //flex: Platform.OS === 'ios' ? 1 : 0,
    },
    selectImage:{
        alignItems: 'center',
    },
    texInput: {
        marginBottom: 10,
        //flex: 1, 
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 0.2,
        paddingBottom: 10,
        paddingTop: 10,
      },
      inputName:{
        flex: 1,
        justifyContent: 'flex-start', 
      },
      field:{
        flex: 1,
        justifyContent: 'flex-end',
      },
});

const mapStateToProps = state => {
    console.log(state);
    return {
        image: state.ReducerImage.image,
        clubUid: state.ReducerSesion._user.uid,
        initialValues: state.ReducerDataClub,
        dataClub: state.ReducerDataClub,
        dataFacilities: state.ReducerDataFacilities,
        dataLocation: state.ReducerLocation,
        dataServices: state.ReducerDataServices,
        dataStaff: state.ReducerDataStaff,
        urlImage: state.ReducerGetUrlImage,
        loading: state.app.loading,
        alertError: state.ReducerAlertError.alertError,
        dataLocation:state.ReducerDataLocation,
        settings: state.ReducerSettingClub,
    }
}

const mapDispatchToProps = dispatch => ({
    loadImage: (image, uidClub) => {
        dispatch(ActionSetLoading());
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
        dispatch(ActionSetLoading());
        dispatch(ActionGetDataClub(uid));
    },
    logout:()=>{
        authentication.signOut().then((response) => {
            dispatch(ActionLogout());
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutProfile)
