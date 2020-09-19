import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const SettingsButton = (props) => {

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
    backgroundColor: '#0197f6',
    width: '50%',
    borderRadius: 4,
  },
});

export default SettingsButton;