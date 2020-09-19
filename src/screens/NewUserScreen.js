import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StyleTextInput from '../components/StyleTextInput';
import SettingsButton from '../components/SettingsButton';
import { FontAwesome } from '@expo/vector-icons';
import '../variables/globals';

const NewUserScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.largeText}><FontAwesome name='pencil-square-o' size={48} color={colorWhite_1} /> Register</Text>
        <Text style={styles.text}>Username</Text>
        <StyleTextInput placeholder=''/>
        <Text style={styles.text}>Email</Text>
        <StyleTextInput placeholder=''/>
        <Text style={styles.text}>Password</Text>
        <StyleTextInput password placeholder=''/>
        <Text type='password' style={styles.text}>
          Re-type Password
        </Text>
        <StyleTextInput password placeholder=''/>
        <View style={styles.btn}>
          <SettingsButton style={styles.btn} text='Submit' />
        </View>
        <View style={styles.btn}>
          <SettingsButton
            style={styles.btn}
            text='Returning User'
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colorSecondary,
    flex: 1,
  },
  container: {
    padding: 20,
    marginVertical: 15,
  },
  largeText: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 20,
    fontSize: 50,
    textAlign: 'left',
    fontFamily: headingFont,
    color: colorWhite_1
  },
  text: {
    fontSize: 15,
    marginLeft: 20,
    textAlign: 'left',
    fontFamily: subheadingFont,
    color: colorWhite_1
  },
  btn: {
    marginTop: 20,
  },
});

export default NewUserScreen;
