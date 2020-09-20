import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import StyleTextInput from '../components/StyleTextInput';
import SettingsButton from '../components/SettingsButton';
import '../variables/globals';
import AppBehavior from '../components/AppBehavior';

const TrialScreen = () => {
    return (
            <ScrollView style={styles.main}>
                <View style={styles.container}>
                <Text style={styles.largeText}> <FontAwesome name='tag' size={48} color={colorWhite_1} /> Trial</Text>
                <Text style={styles.blueTitleText}>Test out key features of our App on a Trial Account!</Text> 
                <Text style={styles.text}>Username</Text>
                <StyleTextInput placeholder=' '/>
                <Text style={styles.text}>Trial Duration</Text>

                <View style={styles.durationContainer}>
                    <View style={styles.durationBox}>
                        <Fontisto name='stopwatch' size={48} color={'green'} /> 
                        <Text style={styles.timeText}>1 Hour</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <Fontisto name='stopwatch' size={48} color={'yellow'} /> 
                        <Text style={styles.timeText}>3 Hours</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <Fontisto name='stopwatch' size={48} color={'red'} /> 
                        <Text style={styles.timeText}>6 Hours</Text>
                    </View>
                </View>

                <Text style={styles.text}>App Behavior</Text>
                <Text style={styles.blueSubText}>What method would you like our App to use to limit phone usage?</Text> 

                <AppBehavior />

                <View style={styles.btn}>
                <SettingsButton
                    style={styles.btn}
                    text='Try It!'
                />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: colorSecondary,
        flex: 1
    },
    durationContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    durationBox: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colorSecondaryLight,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 8
    },
    largeText: {
        marginBottom: 20,
        marginLeft: 20,
        fontSize: 50,
        textAlign: 'left',
        color: colorWhite_1,
        fontFamily: headingFont 
    },
    container: {
        padding: 20,
        marginVertical: 15
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 20,
        fontFamily: subheadingFont,
        color: colorWhite_1
    },
    timeText: {
        fontSize: 15,
        textAlign: 'left',
        marginTop: 16,
        fontFamily: subheadingFont,
        color: colorWhite_1
    },
    btn: {
        marginTop: 20
    },
    blueTitleText: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 20,
        marginBottom: 70,
        fontFamily: subheadingFont,
        color: colorBlue
    },
    blueSubText: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 20,
        marginVertical: 20,
        fontFamily: subheadingFont,
        color: colorBlue
    }
});

export default TrialScreen;