import React, {Component} from "react";
import {View, Text, StyleSheet, Image } from "react-native";
import {StackActions} from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';

import Logo from "../components/Logo";

const Spinner = require('react-native-spinkit');

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#FBBC05',
    },
    luwe:{
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Login'));
        }, 2000);
    }

    render() {
        return (
            <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#FBBC05', '#ffcc66']} style={styles.container}>
                <Logo/>
                <Text style={styles.luwe}>Luwe</Text>
                <Spinner isVisible={true} size={50} type={'ThreeBounce'} color={'#fff'} />
                <Text style={styles.text}>Puas ngidam hati pun senang</Text>
            </LinearGradient>
        );
    }
}

export default SplashScreen;