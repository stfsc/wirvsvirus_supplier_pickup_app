import * as React from 'react';
import {Alert, TextInput, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Input, Button, Text, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default class SetLocation extends React.Component {
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

                <Text h3>Wo befindest du dich?</Text>

                <SearchBar
                    lightTheme
                    platform={'android'}
                    containerStyle={{marginTop: 30, borderWidth: 1, borderColor: '#2096f3ff', borderRadius: 10}}
                    placeholder="Deinen Standort eingeben"
                    onChangeText={(location) => this.updateLocation(location)}
                    value={this.state.location}
                />


                <TouchableOpacity style={{}} onPress={this.onFindLocation.bind(this)}>
                    <Text style={{color: '#2096f3ff', marginTop: 50}}>
                        <Icon name="map-pin" size={30} color="#2096f3ff"/>
                        aktuellen Standort finden
                    </Text>
                </TouchableOpacity>

                <Button
                    large
                    buttonStyle={{marginTop: 50, width: 350}}
                    title='Weiter'
                    onPress={() => this.props.navigation.navigate('SetPickUpDatetime')}
                    disabled={!this.state.locationValid}
                />

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
    }
});
