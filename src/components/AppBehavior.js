import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';


const AppBehavior = (props) => {
  return (
    <View style={styles.main}>

      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons name='checkbox-blank-outline' size={36} color={colorWhite_1} />
          <Text style={styles.h1}> Monitor</Text>
        </View>
        <Feather style={styles.icon} name='info' size={36} color={colorBlue} />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons name='checkbox-blank-outline' size={36} color={colorWhite_1} />
          <Text style={styles.h1}> Reflection</Text>
        </View>
        <Feather style={styles.icon} name='info' size={36} color={colorBlue} />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons name='checkbox-blank-outline' size={36} color={colorWhite_1} />
          <Text style={styles.h1}> Guilt</Text>
        </View>
        <Feather style={styles.icon} name='info' size={36} color={colorBlue} />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons name='checkbox-blank-outline' size={36} color={colorWhite_1} />
          <Text style={styles.h1}> Strict</Text>
        </View>
        <Feather style={styles.icon} name='info' size={36} color={colorBlue} />
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
    main: {


    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        margin: 10
        
    },
    subContainer: {
      backgroundColor: colorSecondaryLight,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      padding: 15,
      borderRadius: 10,
      marginRight: 15

    },
    h1: {
      color: colorWhite_1,
      fontSize: 25,
      fontFamily: subheadingFont,
    },
    icon: {
      marginRight: '30%'
    }

});

export default AppBehavior;
