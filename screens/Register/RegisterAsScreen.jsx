import React, {Component} from "react";
import {StackActions} from "@react-navigation/native";
import {View,Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import RegisterCostumer from "./RegisterCostumer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBBC05',
    },
    button: {    
        flexDirection: 'row',
        width: 200,
        height:  50,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: 10,
    },
    viewButton: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textButton: {

    },
    text:{
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

const Buttons = ({title, onPress, IconName}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.viewButton}>
                <Text style={styles.textButton}> <Icon name={IconName} size={20} /> {title}</Text>
            </View>
        </TouchableOpacity>
    );
}

class RegisterAsScreen extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Register Sebagai</Text>
                <Buttons 
                    title="Register as a Customer" 
                    onPress={() => this.props.navigation.navigate('RegisterCostumer')}
                    IconName="user" />
                <Buttons 
                    title="Register as a Merchant" 
                    // onPress={() => this.props.navigation.dispatch(StackActions.replace('Main'))} 
                    IconName="cart-plus" />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Go to Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default RegisterAsScreen;