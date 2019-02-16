import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LoopStaff, LoopLocations, LoopFacilities, LoopServices } from '../ClubProfileCollapsible';
import Collapsible from '../../../../Utils/Collapsible';
import { traslateText } from '../../../../../Config/Language/Utils';
import NormalizePhone from '../../../../Utils/NormalizePhone';


const AboutClubForm = (props) => {
    const { initialValues } = props;
    console.log(initialValues);
    return (
        <View>
            <View style={styles.scrolContainer}>
                <View style={styles.texInput}>
                    <Text style={styles.inputName}>{traslateText('mainAddress')}</Text>
                    <Text style={styles.field}>{initialValues.data.mainAddress}</Text>
                </View>
                <View style={styles.texInput}>
                    <Text style={styles.inputName}>{traslateText('phone')}</Text>
                    <Text style={styles.field}>{NormalizePhone(initialValues.data.phone)}</Text>
                </View>
                <View style={styles.texInput}>
                    <Text style={styles.inputName}>{traslateText('website')}</Text>
                    <Text style={styles.field}>{initialValues.data.website}</Text>
                </View>
                <Collapsible title="Locations">
                    <LoopLocations data={props.dataLocation} />
                </Collapsible>  
                <Collapsible title="Staff">
                    <LoopStaff data={props.dataStaff} />
                </Collapsible>
                <Collapsible title="Services">
                    {/*<LoopServices data={props.dataServices} />*/}
                </Collapsible>
                <Collapsible title="Facilities">
                    {/*<LoopFacilities data={props.dataFacilities} />*/}
                </Collapsible> 
                <View style={styles.texInput}>
                    <Text style={styles.inputName}>{traslateText('calendarHeadlines')}</Text>
                    <Text style={styles.field}></Text>
                </View>
                <View style={styles.texInput}>
                    <Text style={styles.inputName}>{traslateText('calendarLink')}</Text>
                    <Text style={styles.field}></Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
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

export default AboutClubForm;