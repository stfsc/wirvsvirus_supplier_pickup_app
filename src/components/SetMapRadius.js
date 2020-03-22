import * as React from 'react';
import {Alert, TextInput, View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Input, Button, Text, SearchBar, Slider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MapView, {Marker, Circle} from 'react-native-maps';

export default class SetMapRadius extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            radius: 2000
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <Text h3>Gib deinen Radius ein</Text>

                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                    ></Marker>
                    <Circle
                        center={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        radius={this.state.radius}
                        fillColor={'#2096f350'}
                        strokeColor={'#2096f3ff'}
                    ></Circle>
                </MapView>

                <Slider
                    value={this.state.radius}
                    onValueChange={radius => this.setState({radius})}
                    style={{width: 400}}
                    minimumValue={0}
                    maximumValue={5000}
                    step={10}
                />
                <Text>Value: {this.state.radius}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: 'white'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        marginTop: 30,
        height: 400,
    }
});
