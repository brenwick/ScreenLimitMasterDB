import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import StyleTextInput from '../components/StyleTextInput';
import SettingsButton from '../components/SettingsButton';
import { FontAwesome } from '@expo/vector-icons';
import '../variables/globals';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.largeText}> <FontAwesome name='key' size={48} color={colorWhite_1} /> Login</Text>
        <Text style={styles.text}>Username</Text>
        <StyleTextInput placeholder=' '/>
        <Text style={styles.text}>Password</Text>
        <StyleTextInput placeholder=' ' password />
        <View style={styles.btn}>
          <SettingsButton style={styles.btn} text='Submit'/>
        </View>
        <View style={styles.btn}>
          <SettingsButton
            style={styles.btn}
            text='New User'
            onPress={() => navigation.navigate('NUser')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colorSecondary,
    flex: 1,
    justifyContent: 'center',
    
  },
  container: {
    padding: 20,
    marginVertical: 15,
  },
  largeText: {
    marginBottom: 80,
    marginLeft: 20,
    fontSize: 50,
    textAlign: 'left',
    color: colorWhite_1,
    fontFamily: headingFont                                       
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 20,
    fontFamily: subheadingFont,
    color: colorWhite_1
  },
  btn: {
    marginTop: 20,
  },
});

export default LoginScreen;
