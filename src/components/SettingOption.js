import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import StyleTextInput from '../components/StyleTextInput';


const SettingOption = ({ label, placeholder }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.h1}>{label}</Text>
            <StyleTextInput placeholder={placeholder}/>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    marginHorizontal: 20, 
    borderRadius: 20,
    width: '95%',
    alignSelf: 'center'
    },

    h1: {
        color: colorBlue,
        fontSize: 16,
        marginLeft: 20,
    }
});

export default SettingOption;