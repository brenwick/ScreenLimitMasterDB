import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustomButton = (props) => {
    
const styles = StyleSheet.create({
    buttonText: {
      fontSize: 25,
      color: props.textColor
    },
    button: {
      alignItems: 'center',
      alignSelf: 'center',
      padding: 15,
      backgroundColor: props.backgroundColor,
      borderRadius: 6,
      margin: 7,
      width: 200
    }
});

  const content = (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
    );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
};


export default CustomButton;