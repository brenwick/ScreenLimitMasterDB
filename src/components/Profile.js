import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import '../variables/globals';

const Profile = (props) => {
  return (
    <View>
      <Text style={styles.heading}> Profile <FontAwesome name='user' size={50} color={colorWhite_1} /></Text>
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={require('../../assets/user.jpg')}
      ></Image>
      <Text style={styles.h1}>
        {props.fname} {props.lname}
      </Text>
      <View style={styles.sub}>
        <FontAwesome name='wrench' size={30} color={colorIcon} />
        <Feather name='mail' size={30} color={colorIcon} />
        <SimpleLineIcons name='logout' size={30} color={colorIcon} />
      </View>
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
    height: 350,
    margin: 20,
    borderRadius: 20,
  },
  sub: {
    flex: 1,
    marginTop: 60,
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
    marginTop: 40,
    marginBottom: 0
  },
  h1: {
    color: colorWhite_1,
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: headingFont
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
export default Profile;
