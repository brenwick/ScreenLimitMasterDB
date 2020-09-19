import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MethodExDetails from '../components/MethodExDetails';

const NewProfileScreen = () => {
    return (
        <View>
            <Text>New Profile Screen</Text>
            <Text> This is where a New User will get an understanding of what our app does, what each method does, and where they select which methods they'd prefer.</Text>

            <Text>This is a Full Explanation of How App Works [Insert Here]</Text>

            <Text style={styles.keepText}> Examples of Method Types</Text>

            <ScrollView horizontal={true}>

                <MethodExDetails
                    title="Monitor"
                    imageSource={require('../../assets/imgMonitor.png')}
                />

                <MethodExDetails
                    title="Reflection"
                    imageSource={require('../../assets/imgReflection.png')}
                />

                <MethodExDetails
                    title="Guilt"
                    imageSource={require('../../assets/imgGuilt.png')}
                />

                <MethodExDetails
                    title="Strict"
                    imageSource={require('../../assets/imgStrict.png')}
                />

            </ScrollView>

            <Text>Select Desired Method</Text>
            <Text>Enter a login & User Password Input</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    keepText:{fontWeight: 'bold'}
});

export default NewProfileScreen;