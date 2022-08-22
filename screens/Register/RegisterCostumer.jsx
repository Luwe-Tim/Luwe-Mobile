import React, {Component} from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native";

import Buttons from "../../components/Buttons";

const styles = StyleSheet.create({
    input: {
        color: 'black',
        marginBottom: 20,
        backgroundColor: '#EAEEED',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    text:{
        color: '#FBBC05',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    }
});

class RegisterCostumer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            phone: '',
            error: false,
        };
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}>Set Up Your Profile</Text>
                <View style={{width: '80%',}} >
                    <Text style={{color: 'black', fontSize: 15, textAlign:'left'}}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type Your Name Here"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                </View>
                <View style={{width: '80%',}} >
                    <Text style={{color: 'black', fontSize: 15, textAlign:'left'}}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type Your Phone Number Here"
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                        keyboardType="numeric"
                    />
                </View>
                <View style={{width: '80%',}} >
                    <Text style={{color: 'black', fontSize: 15, textAlign:'left'}}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type Your Password Here"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>
                <Buttons title="Register" onPress={() => this.props.navigation.navigate('Login')}/>
            </View>
        );
    }
}

export default RegisterCostumer;