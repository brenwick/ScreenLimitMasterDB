import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import StyleTextInput from '../components/StyleTextInput';
import SettingsButton from '../components/SettingsButton';
import { FontAwesome } from '@expo/vector-icons';
import '../variables/globals';
import { sub } from 'react-native-reanimated';

const CreateNewUser = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    const submitData = async () => {
        await fetch("http:///192.168.1.79:5000/user", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                username,
                email,
                password,
                retypePassword
            })
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json.message);
          return json.message;
        })
        .then(() => {
          setUsername('');
          setEmail('');
          setPassword('');
          setRetypePassword('');
        })
        .catch(err=>{
          console.log(err);
        })
    };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.largeText}><FontAwesome name='pencil-square-o' size={48} color={colorWhite_1} /> Register</Text>
        <Text style={styles.text}>Username</Text>

        <TextInput 
            style={styles.textInput}
            label='username'
            value={username}
            onChangeText={username => 
              {
              setUsername(username);
              } 
            }
        />

        <Text style={styles.text}>Email</Text>

        <TextInput 
            style={styles.textInput}
            label='email'
            value={email}
            onChangeText={email => 
              {
              setEmail(email);
              } 
            }
        />
        
        <Text style={styles.text}>Password</Text>

        <TextInput 
            style={styles.textInput}
            label='password'
            value={password}
            onChangeText={password => 
              {
              setPassword(password);
              } 
            }
        />
        
        <Text type='password' style={styles.text}>
          Re-type Password
        </Text>

        <TextInput 
            style={styles.textInput}
            label='retypePassword'
            value={retypePassword}
            onChangeText={retypePassword => 
              {
              setRetypePassword(retypePassword);
              } 
            }
        />
  
        <View style={styles.btn}>
          <SettingsButton 
            style={styles.btn} 
            text='Submit'
            onPress={() => submitData()} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colorSecondary,
    flex: 1,
  },
  container: {
    padding: 20,
    marginVertical: 15,
  },
  largeText: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 20,
    fontSize: 50,
    textAlign: 'left',
    fontFamily: headingFont,
    color: colorWhite_1
  },
  text: {
    fontSize: 15,
    marginLeft: 20,
    textAlign: 'left',
    fontFamily: subheadingFont,
    color: colorWhite_1
  },
  textInput: {
    height: 55,
    margin: 15,
    backgroundColor: colorSecondaryLight,
    borderRadius: 5,
    color: colorWhite_1,
    fontSize: 20
  },
  btn: {
    marginTop: 20,
  },
});

export default CreateNewUser;
