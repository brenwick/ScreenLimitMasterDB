import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import '../variables/globals';

const StyleTextInput = (props) => {
  const [value, onChangeText] = React.useState();

  return (
    <TextInput
      style={styles.input}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      secureTextEntry={props.password}
      placeholder={'    ' + props.placeholder}
      placeholderTextColor='#fff'
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 15,
    backgroundColor: colorSecondaryLight,
    borderRadius: 5
  },
});

export default StyleTextInput;
