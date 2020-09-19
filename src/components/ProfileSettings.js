import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const ProfileSetting = (props) => {
  return (
    <View>
      <Text style={styles.heading}> Settings <FontAwesome name='wrench' size={30} color={colorWhite_1} /></Text>
    <View style={styles.main}>
      <Text style={styles.h1}>
        {props.fname} {props.lname}
      </Text>
      <Image
        style={styles.image}
        source={require('../../assets/user.jpg')}
      ></Image>
      <Text style={styles.editText}>Edit Profile Picture</Text>
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: colorSecondaryLight,
    width: '95%',
    height: 300,
    margin: 20,
    borderRadius: 20,
  },
  sub: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around',
    fontFamily: subheadingFont
  },
  image: {
    borderRadius: 1000,
    alignSelf: 'center',
    width: 160,
    height: 160,
  },
  h1: {
    color: colorWhite_1,
    fontSize: 30,
    margin: 20,
    textAlign: 'center',
    fontFamily: headingFont
  },
  editText: {
      color: colorBlue,
      textAlign: 'center',
      margin: 20
  },
  heading: {
    color: colorBlue,
    fontSize: 30,
    textAlign: 'left',
    fontFamily: headingFont,
    marginBottom: 40,
    marginLeft: 10,
    marginTop: 20
  }
});
export default ProfileSetting;
