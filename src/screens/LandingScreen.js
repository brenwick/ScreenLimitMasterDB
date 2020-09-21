import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import '../variables/globals';

const LandingScreen = ({ navigation }) => {

  return (
    <View style={styles.main}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgb(163,52,255)', ' rgb(65,167,252)']}
        style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 800,
            }}
        />
        <View style={styles.container}>
            <MaterialCommunityIcons name='cellphone-lock' size={140} color={'#fff'} /> 
            <Text style={styles.largeText}>ScreenLimit</Text>
        </ View>

        <View style={styles.buttonContainer}>
            <CustomButton 
                text='Login'
                backgroundColor={colorSecondary}
                textColor={colorBlue}
                onPress={() => navigation.navigate('Login')}
            />
            <CustomButton 
                text='Register'
                backgroundColor={colorSecondary}
                textColor='#B76CFD'
                onPress={() => navigation.navigate('NUser')}
            />
            <CustomButton 
                text='Trial'
                backgroundColor={colorSecondary}
                textColor='#09F8D3'
                onPress={() => navigation.navigate('Trial')}
            />  
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
      backgroundColor: colorSecondary,
      flex: 1,
    },
    container: {
      padding: 20,
      flex: 1,
      alignContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      marginVertical: 30
    },
    buttonContainer: {
      flex: 1,
      alignContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      marginVertical: 8,
    },
    largeText: {
      marginBottom: 80,
      marginLeft: 20,
      fontSize: 50,
      textAlign: 'left',
      color: '#fff',
      fontFamily: headingFont                                       
    },
    text: {
      fontSize: 20,
      textAlign: 'left',
      marginLeft: 20,
      fontFamily: subheadingFont,
      color: colorWhite_1
    },
    btn: {
      marginTop: 20,
    },
  });


export default LandingScreen;
