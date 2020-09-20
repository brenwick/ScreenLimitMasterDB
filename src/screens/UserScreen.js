import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import Profile from '../components/Profile';
import UserCategory from '../components/UserCategory';


const UserScreen = () => {

  return (
    <ScrollView style={styles.main}>
      <Profile fname='Brandon' lname='Renwick' />
      <UserCategory
        title={'User Statistics'}
        iconName={'bar-chart'}
        color={'#C24CF6'}
      />
      <UserCategory
        title={'User Rewards'}
        iconName={'trophy'}
        color={'#FF1493'}
      />
      <UserCategory
        title={'App Settings'}
        iconName={'cogs'}
        color={'#FC6E22'}
      />
      <UserCategory
        title={'App Behavior'}
        iconName={'fas fa-robot'}
        color={'#09FBD3'}
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
