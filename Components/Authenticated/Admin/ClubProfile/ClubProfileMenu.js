import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { traslateText } from '../../../../Config/Language/Utils';
import { ListItem } from 'react-native-elements';

export default class ClubProfileMenu extends Component {
  render() {
    console.log(this.props);
    const {navigation} = this.props
    return (
        <View style={styles.container}> 
            <View style={styles.viewBanner}>
                <Image style={styles.banner} source={require('../../../../Assets/icons/tennisAppSuiteBanner.png')}/>
            </View>
            <ListItem 
                onPress={() => { navigation.navigate('ClubProfile')}}
                title={traslateText('club_org_profile')}
                leftAvatar={{ source: require('../../../../Assets/icons/club-org-seal.png') }}
            />
            <ListItem
                title={traslateText('court_detail')}
                leftAvatar={{ source: require('../../../../Assets/icons/iconcluborg.png') }}
            />
            <ListItem
                title={traslateText('manage_sponsors')}
                leftAvatar={{ source: require('../../../../Assets/icons/iconsponsorAD.png') }}
            />
            <ListItem
                title={traslateText('my_staff')}
                leftAvatar={{ source: require('../../../../Assets/icons/iconmystaff.png') }}
            />
            <ListItem
                title={traslateText('gallery')}
                leftAvatar={{ source: require('../../../../Assets/icons/iconfacilities.png') }}
            />
            <ListItem
                title={traslateText('services')}
                leftAvatar={{ source: require('../../../../Assets/icons/iconmystaff.png') }}
            />
            <ListItem
                title={traslateText('facilities')}
                leftAvatar={{ source: require('../../../../Assets/icons/iconfacilities.png') }}
            />
        </View>
    );
  }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    list: {
        flex:0.5,
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 0.2,
        paddingBottom: 10,
        paddingTop: 10,
      },
      image:{
        //justifyContent: 'flex-start', 
        height:50,
        width:50
      },
      item:{
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop:10,
        //justifyContent: 'flex-end',
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
