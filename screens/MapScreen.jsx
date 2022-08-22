// buat screen untuk menampilkan maps
import React, { Component } from 'react';
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions, BackHandler} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
            daftarLokasi:[
                {
                    title: 'horizon',
                    latitude: -7.0117081,
                    longitude: 110.4783662,
                },
                {
                    title: 'manunggal',
                    latitude: -7.0122981,
                    longitude: 110.4821204,
                }
            ]
        };
    }

    requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Ijinkan Aplikasi Mengakses Lokasi",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location");
          } else {
            console.log("location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };


    componentDidUpdate(prevProps, prevState) {
        Geolocation.watchPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            }
        );
    }

    componentDidMount() {
        this.requestLocationPermission();

        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            error => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    render() {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} />
                <MapView
                provider={PROVIDER_GOOGLE} 
                style={{ ...StyleSheet.absoluteFillObject }}
                region={this.getMapRegion()}
                >
                <Marker coordinate={this.getMapRegion()} />
                {this.state.daftarLokasi.map((marker, index) => (
                    <Marker
                    key={index}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    }}
                    title={marker.title}
                    description={marker.description}
                    />
                ))}
                </MapView>
            </View>
        );
    }
}

export default MapScreen;