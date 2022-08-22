import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {StackActions} from "@react-navigation/native";

import Logo from '../components/Logo';
import Buttons from '../components/Buttons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        color: 'black',
        width: '80%',
        marginBottom: 20,
        backgroundColor: '#EAEEED',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    login: {
        fontSize: 30,
        color: "#FBBC05",
        fontWeight: 'bold',
        marginBottom: 20,
    },
    error: {
      color: 'red',
      fontSize: 15,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    text: {
        marginVertical: 10,
        color: 'black',
        fontSize: 15,
    }
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false,
    };
  }

  login = () => {
    const {username, password} = this.state;
    this.props.navigation.dispatch(StackActions.replace('Main'));
    // if(username === '08123456789' && password === '123') {
    //   this.props.navigation.navigate('Main');
    // }else{
    //   this.setState({error: true});
    //   this.setState({username: ''});
    //   this.setState({password: ''});
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Text style={styles.login}>Login in to Luwe</Text>
        {
          this.state.error ? <Text style={styles.error}>Maaf, Nomor Telepon atau Password anda salah</Text> : null
        }
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="black"
          keyboardType="number-pad"
          onChangeText={(text) => this.setState({username: text, error: false})}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text, error: false})}
        />
        <Buttons title="Login" onPress={this.login} />
        <Text style={styles.text}> Belum Punya Akun ? 
            <Text  onPress={() => this.props.navigation.navigate('RegisterAs')} style={{color: 'blue'}}> Daftar</Text>
        </Text>
      </View>
    );
  }
}

export default LoginScreen;
