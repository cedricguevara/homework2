import React, { Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Image, TextInput, Button, NativeAppEventEmitter, Alert, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import buttonLayout from './components/buttonLayout';


const CalculatorScreen = ({ }) => {
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [answer, setAnswer] = useState();
    const [operation, setOperation] = useState('');

    return (
        <View>
        
            <View style={styles.container}>
                <Text style={{fontSize:40}}>{answer}</Text>
            </View>

            <View style={styles.textContainer1}>
                <View style={{justifyContent:'flex-start'}}>
                    <TextInput style={styles.textInput1}
                    placeholder = '...     '
                    keyboardType = 'numeric'
                    onChangeText = {(val) => setFirst(val)}
                    value = {first}
                    />
                </View>

                <View style={styles.buttonStyle2}>
                    <Text style={styles.textStyle2}>{operation}</Text>
                </View>

                <View style={{justifyContent:'flex-end'}}> 
                    <TextInput style={styles.textInput1}
                    placeholder = '...     '
                    keyboardType = 'numeric'
                    onChangeText ={(val) => setSecond(val)}
                    value = {second}
                    />
                </View>
            </View>
            
            <View style={styles.textContainer1}>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity
                        title='x'
                        onPress = {() => {
                            setOperation('x')
                        }}
                    >
                    <Text style={styles.colorStyle}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity
                        title='+'
                        onPress = {() => {
                            setOperation('+')
                        }}
                    >
                    <Text style={styles.colorStyle}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity
                        title='-'
                        onPress = {() => {
                            setOperation('-')
                        }}
                    >
                    <Text style={styles.colorStyle}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity
                        title='÷'
                        onPress = {() => {
                            setOperation('÷')
                        }}
                    >
                    <Text style={styles.colorStyle}>÷</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.textContainer1}>
                <View style={styles.buttonStyle3}>
                    <TouchableOpacity
                        title='c'
                        onPress = {() => {
                            setOperation(); setAnswer(); setFirst(); setSecond();
                        }}
                    >
                    <Text style={styles.colorStyle}>c</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonStyle4}>
                    <TouchableOpacity
                        title= '='
                        onPress = {() => {
                            if(operation == '+'){
                                setAnswer(parseInt(first) + parseInt(second))
                            } else if(operation == 'x'){
                                setAnswer(parseInt(first) * parseInt(second))
                            } else if(operation == '-'){
                                setAnswer(parseInt(first) - parseInt(second))
                            } else if (operation == '÷'){
                                setAnswer(parseInt(first) / parseInt(second))
                            }
                        }}
                    >
                    <Text style={styles.colorStyle}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 1,
        margin: 20,
        padding: 40,
    },
    firstNumber:{
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 1,
        margin: 20,
        padding: 40,
    },
    textContainer1: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    textInput1: {
        margin:10,
        padding:10,
        borderWidth:1,
        backgroundColor: '#FFF',
        fontSize: 40
    },
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
    buttonStyle2: {
        padding: 20,
        height: 60,
        width: 60,
        borderRadius:120,
        backgroundColor:'#686868',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonStyle3: {
        padding: 20,
        margin:10,
        width:140,
        height:60,
        borderRadius:10,
        backgroundColor:'#fa2020',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonStyle4: {
        padding: 20,
        margin:10,
        width:140,
        height:60,
        borderRadius:10,
        backgroundColor:'#de7010',
        justifyContent:'center',
        alignItems:'center'
    },
    colorStyle:{
        fontSize:30,
        color:'#fff',
        marginBottom:8
    },
    textStyle: { 
        marginBottom:5,
        fontSize:30
    },
    textStyle2: { 
        marginBottom:5,
        fontSize:30,
        color: '#fff'
    }

});

export default CalculatorScreen;