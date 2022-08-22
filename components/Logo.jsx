import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
});

export default Logo = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../images/logo.png')} />
        </View>
    );
}