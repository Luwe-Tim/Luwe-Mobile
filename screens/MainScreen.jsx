import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from './MapScreen';
import RegisterScreen from './Register/RegisterScreen';

const Tab = createBottomTabNavigator();

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <Tab.Navigator
            firstRouteName="Map"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="Map" component={MapScreen} options={{title: 'Map', tabBarIcon: () => (<Icon name="map" />)}} />
            <Tab.Screen name="Profile" component={RegisterScreen} options={{title: 'Profile', tabBarIcon: () => (<Icon name="user" />)}} />
        </Tab.Navigator>
        );
    }
}

export default MainScreen;