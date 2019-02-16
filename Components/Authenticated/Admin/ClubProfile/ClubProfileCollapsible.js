import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Collapsible from '../../../Utils/Collapsible';
import NormalizePhone from '../../../Utils/NormalizePhone';

export const LoopLocations = (props) => {
    const location = props.data;
    var location_list = location.map(function(location){
        return <Collapsible title={location._data.location}>
                    <View style={styles.container}>
                        <Text style={styles.field}> Court ID </Text>
                        <Text style={styles.value}> {location._data.court_ID}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Court No </Text>
                        <Text style={styles.value}> {location._data.court_no} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Court Name </Text>
                        <Text style={styles.value}> {location._data.court_name} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Court Address </Text>
                        <Text style={styles.value}> {location._data.court_address} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Phone No </Text>
                        <Text style={styles.value}> {location._data.phone} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Playable Status </Text>
                        <Text style={styles.value}> {location._data.playable_status} </Text>
                    </View>
                </Collapsible>;
    });

    return location_list
};

 export const LoopStaff = (props) => {
    const staff = props.data;
    var staff_list = staff.map(function(staff){
        return <Collapsible title={staff._data.staff_name}>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Name </Text>
                        <Text style={styles.value}> {staff._data.staff_name}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Mobile No </Text>
                        <Text style={styles.value}> {NormalizePhone(staff._data.mobile_no)} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Bio </Text>
                        <Text style={styles.value}> {staff._data.staff_bio} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Working Hours </Text>
                        <Text style={styles.value}> {staff._data.working_hours} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Email ID </Text>
                        <Text style={styles.value}> {staff._dataemail_ID} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Role </Text>
                        <Text style={styles.value}> {staff._data.staff_role} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}>Fees </Text>
                        <Text style={styles.value}> {staff._data.fees} </Text>
                    </View>
                </Collapsible>;
    });

    return staff_list
};

export const LoopFacilities = (props) => {
    const facilities = props.data;
/*    console.log('staff en loop', staff)
    var staff_list = staff.map(function(staff){
        return <Collapsible title={facilities.facilities_name}>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Name </Text>
                        <Text style={styles.value}> {staff.staff_name}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Mobile No </Text>
                        <Text style={styles.value}> {staff.mobile_no} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Bio </Text>
                        <Text style={styles.value}> {staff.staff_bio} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Working Hours </Text>
                        <Text style={styles.value}> {staff.working_hours} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Email ID: </Text>
                        <Text style={styles.value}> {staff.email_ID} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Role </Text>
                        <Text style={styles.value}> {staff.staff_role} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}>Fees </Text>
                        <Text style={styles.value}> {staff.fees} </Text>
                    </View>
                </Collapsible>;
    });*/

    return <Text>Facilities</Text>
};

export const LoopServices = (props) => {
    const services = props.data;
/*    console.log('staff en loop', staff)
    var staff_list = staff.map(function(staff){
        return <Collapsible title={facilities.facilities_name}>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Name </Text>
                        <Text style={styles.value}> {staff.staff_name}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Mobile No </Text>
                        <Text style={styles.value}> {staff.mobile_no} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Bio </Text>
                        <Text style={styles.value}> {staff.staff_bio} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Working Hours </Text>
                        <Text style={styles.value}> {staff.working_hours} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Email ID: </Text>
                        <Text style={styles.value}> {staff.email_ID} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}> Staff Role </Text>
                        <Text style={styles.value}> {staff.staff_role} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.field}>Fees </Text>
                        <Text style={styles.value}> {staff.fees} </Text>
                    </View>
                </Collapsible>;
    });*/

    return <Text>Services</Text>
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        paddingBottom: 10,
        paddingTop: 10,
    },
    field: {
        flex:1
    },
    value:{
        flex:2
    }
});