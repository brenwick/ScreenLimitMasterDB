import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserCategory = (props) => {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={props.src} />
      <Text style={styles.h1}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colorSecondaryLight,
    width: '95%',
    height: 115,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginLeft: 15,
    alignSelf: 'center',
  },
  h1: {
    color: colorWhite_1,
    fontSize: 25,
    alignSelf: 'center',
    marginRight: 60,
    fontFamily: headingFont
  },
});
export default UserCategory;
