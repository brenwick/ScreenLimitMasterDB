import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import axios from 'axios';

class UsersList extends Component {
    // Class level property to manage state
    state = { users: [], myValue: 1 };


    componentDidMount() {
        axios.get('http://192.168.1.79:5000/users')
        .then(response => this.setState({ users: response.data }))
    }


    deleteUser(user_id) {
        console.log('Deleting: ' + user_id);
        axios.post('http://192.168.1.79:5000/deleteuser', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            payload: {
                "_id" : user_id
            }
        })
        .then(console.log('Deleted User: ' + user_id))
    }

    renderUsers() {
        return this.state.users.map(user => 
            <View key={user._id} style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.blueText}>Username: </Text>
                    <Text style={styles.text}>{user.username}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.blueText}>Email: </Text>
                    <Text style={styles.text}>{user.email}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.blueText}>Password: </Text>
                    <Text style={styles.text}>{user.password}</Text>
                </View>

                <View style={styles.btn}>
                    <Button title="delete" onPress={() => this.deleteUser(user._id)}></Button>
                </View>

            </View>
        );
    }
    render() {
        return (
            <ScrollView style={styles.main}>
                <Text style={styles.warning}>WARNING! Showing/storing passwords in plaintext is very, very stupid and this is only to debug</Text>
                <Text style={styles.h1}>User List:</Text>
                {this.renderUsers()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: colorSecondary,
        flex: 1
    },
    container: {
        borderColor: colorWhite_1,
        borderWidth: 1,
        padding: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    h1: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 20,
        marginLeft: 10
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    blueText: {
        color: colorBlue,
        fontSize: 20,
        marginHorizontal: 10
    },
    warning: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        margin: 20
    },
    btn: {
        marginTop:10,
        marginHorizontal:40 ,
        padding: 20
    }
});

export default UsersList;