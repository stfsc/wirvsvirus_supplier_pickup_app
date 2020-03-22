import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import MapView, {Circle, Marker} from "react-native-maps";

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            radius: 2000
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: 52.520008,
                        longitude: 13.404954,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 52.520008,
                            longitude: 13.404954,
                        }}
                    ></Marker>
                    <Marker
                        coordinate={{
                            latitude: 52.530008,
                            longitude: 13.414954,
                        }}
                    ></Marker>
                    <Marker
                        coordinate={{
                            latitude: 52.510008,
                            longitude: 13.414954,
                        }}
                    ></Marker>
                    <Marker
                        coordinate={{
                            latitude: 52.510008,
                            longitude: 13.384954,
                        }}
                    ></Marker>
                    <Circle
                        center={{
                            latitude: 52.520008,
                            longitude: 13.404954,
                        }}
                        radius={this.state.radius}
                        fillColor={'#2096f350'}
                        strokeColor={'#2096f3ff'}
                    ></Circle>
                </MapView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    mapStyle: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});
