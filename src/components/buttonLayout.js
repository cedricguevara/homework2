import React, { Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Image, TextInput, Button, NativeAppEventEmitter, Alert, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonLayout = ({op,setOp}) => {
    const setOp1 = {setOp}
    return (
        <View style={styles.buttonStyle}>
            <TouchableOpacity
                title={op}
                onPress = {() => {
                    setOperation({op})
                }}
            >
            <Text style={styles.colorStyle}>{op}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        padding: 20,
        margin: 10,
        height: 60,
        width: 60,
        borderRadius:120,
        backgroundColor:'#de7010',
        justifyContent:'center',
        alignItems:'center'
    },
    colorStyle:{
        fontSize:30,
        color:'#fff',
        marginBottom:8
    },
})

export default ButtonLayout
