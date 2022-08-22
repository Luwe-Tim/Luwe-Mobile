import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Register Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegisterScreen;
