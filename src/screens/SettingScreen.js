import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileSettings from '../components/ProfileSettings';
import SettingOption from '../components/SettingOption';
import SettingsButton from '../components/SettingsButton';

const SettingScreen = () => {
    return (
        <ScrollView style={styles.main}>
            <ProfileSettings fname='Brandon' lname='Renwick'/>
            <SettingOption label='First Name' placeholder='Brandon'/>
            <SettingOption label='Last Name' placeholder='Renwick'/>
            <SettingOption label='Email Address' placeholder='brenwick2020@gmail.com'/>
            <SettingOption label='Phone Number' placeholder='+1-202-123-4567'/>
            <View style={styles.btn}>
                <SettingsButton text='Update Profile'/>
            </View>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: colorSecondary
    },
    btn: {
        marginTop: 20,
        marginBottom: 40
    }
});

export default SettingScreen;