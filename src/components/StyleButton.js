import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const StyleButton = (props) => {

  const content = (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
    )

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#adbce6',
    width: '60%',
    borderRadius: 4,
    margin: 20
  },
});

export default StyleButton;
