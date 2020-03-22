import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import MapView from "react-native-maps";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            locationValid: false
        };
    }

    onFindLocation() {
        this.setState({
                location: 'Pariser Platz, 10117 Berlin',
                locationValid: true
            }
        );
    };

    updateLocation(location) {
        this.setState({
                location: location,
                locationValid: true
            }
        );
    };

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
                </MapView>

                <View style={{
                    position: 'absolute',
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    backgroundColor: '#000000',
                    opacity: 0.3
                }}/>

                <View style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: '90%',
                    padding: 20,
                    elevation: 5,
                    borderRadius: 10,
                }}>
                    <Text h4 style={{color: '#707070', textAlign: 'center'}}>Wann möchtest du liefern?</Text>
                    <Button
                        large
                        buttonStyle={{marginTop: 30}}
                        title='Jetzt liefern'
                        onPress={() => this.props.navigation.navigate('Map')}
                    />
                    <Button
                        large
                        type="outline"
                        buttonStyle={{marginTop: 20}}
                        title='Lieferung planen'
                        onPress={() => this.props.navigation.navigate('Availability')}
                    />
                </View>

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
