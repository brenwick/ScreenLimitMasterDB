import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Profile from '../components/Profile';
import UserCategory from '../components/UserCategory';



const UserScreen = () => {

  return (
    <ScrollView style={styles.main}>
      <Profile fname='Brandon' lname='Renwick' />
      <UserCategory
        src={require('../../assets/stats.png')}
        title={'User Statistics'}
      />
      <UserCategory
        src={require('../../assets/new_trophy.jpg')}
        title={'User Rewards'}
      />
      <UserCategory
        src={require('../../assets/settings.png')}
        title={'App Settings'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
   backgroundColor: colorSecondary
  }
});

export default UserScreen;
