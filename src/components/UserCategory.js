import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const UserCategory = (props) => {

  if(props.iconType === 'FontAwesome'){
    return (
      <View style={styles.main}>
          <FontAwesome style={styles.icon} name={props.iconName} size={70} color={props.color} />
        <Text style={styles.h1}>{props.title}</Text>
      </View>
    );
  } else {
    return(
    <View style={styles.main}>
          <FontAwesome5 style={styles.icon} name={props.iconName} size={70} color={props.color} />
        <Text style={styles.h1}>{props.title}</Text>
      </View>
    );
  }

  
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
    alignItems: 'center'
  },
  icon: {
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
