import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    View,
    Button,
    TextInput,
    Text,
} from 'react-native'

const IntegerInput = () => (
    <View style={styles.container}>
        <Text style={styles.errorText}>{errorValue}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
        marginBottom: 10,
    },
})

export default IntegerInput
