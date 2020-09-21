import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import StyleButton from '../components/StyleButton';
import '../variables/globals';

const MasterScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.mainContainer}>

      <View style={styles.subContainer}> 
        <Text style={styles.text}>Landing Screen</Text>
        <StyleButton
          text='Landing Screen'
          onPress={() => navigation.navigate('Landing')} />
      </View>


      <View style={styles.subContainer}>
      <Text style={styles.text}>Login & Registration</Text>
      <StyleButton
        text='Login Screen'
        onPress={() => navigation.navigate('Login')}
      />
       <StyleButton
        text='Register Screen'
        onPress={() => navigation.navigate('NUser')}
      />
      <StyleButton
        text='Trial Screen'
        onPress={() => navigation.navigate('Trial')}
      />
      </View>
      
     
      <View style={styles.subContainer}>
      <Text style={styles.text}>New & Existing Profiles</Text>
      <StyleButton
        text='TODO: New User Profile Screen'
        onPress={() => navigation.navigate('NProfile')}
      />
      <StyleButton
        text='User Screen'
        onPress={() => navigation.navigate('User')}
      />
       <StyleButton
        text='User Settings Screen'
        onPress={() => navigation.navigate('Settings')}
      />
      </View>
      

      <View style={styles.subContainer}>
      <Text style={styles.text}>App Features</Text>
      <StyleButton
        text='TODO: History Screen'
        onPress={() => navigation.navigate('History')}
      />
      <StyleButton
        text='TODO: App Selection Screen'
        onPress={() => navigation.navigate('Apps')}
      />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorSecondary
  },

  subContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colorSecondaryLight,
    padding: 10,
    marginTop: 30,
    borderRadius: 10
  },

  text: {
    color: colorWhite_1,
    textAlign: 'center',
    fontFamily: subheadingFont,
    fontSize: 20,
    textDecorationLine: 'underline'
  },
});

export default MasterScreen;
