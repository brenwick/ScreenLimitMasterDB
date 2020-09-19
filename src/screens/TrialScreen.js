import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TrialScreen = () => {
    return (
        <View>
            <Text>Trial Screen</Text>
            <Text>This is a "test trial" option for users who are not sure if they even need to use our app. </Text>

            <Text>Explanation Of Trial Zone</Text>
            <Button title = 'Create Temperary User Profile' />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrialScreen;