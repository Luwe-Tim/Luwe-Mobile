import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";

const styles = StyleSheet.create({
    button: {
        width: 100,
        height:  35,
        backgroundColor: '#FBBC05',
        borderRadius: 20,
       
    },
    text: {
        color: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 7,
    }
});

const Buttons = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Buttons;