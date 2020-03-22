import * as React from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import MapView from "react-native-maps";
import Icon from 'react-native-vector-icons/Feather';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transport: ''
        };
    }

    setTransport(transport) {
        this.setState({
                transport: transport,
            }
        );
    };

    render() {
        return (
            <View style={styles.container}>

                <Text h4 style={{color: '#707070', textAlign: 'center', marginTop: 30}}>Profil</Text>
                <Text h3>Wie bist du unterwegs?</Text>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 60}}>

                    <TouchableOpacity style={[this.state.transport === 'walk' ? styles.transportSelectStyle : styles.transportStyle]}
                                      onPress={() => this.setTransport('walk')}>
                        <Image
                            style={{}}
                            width={50}
                            height={114}
                            source={require('../../assets/transport_icons/walk.png')}
                        />
                        <Text style={{color: '#2096f3ff', textAlign: 'center', marginTop: 10, fontSize: 18}}>
                            zu Fuß
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[this.state.transport === 'motorcycle' ? styles.transportSelectStyle : styles.transportStyle]}
                                      onPress={() => this.setTransport('motorcycle')}>
                        <Image
                            style={{}}
                            width={77}
                            height={135}
                            source={require('../../assets/transport_icons/motorcycle.png')}
                        />
                        <Text style={{color: '#2096f3ff', textAlign: 'center', marginTop: 10, fontSize: 18}}>
                            Fahrrad/Roller
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>

                    <TouchableOpacity style={[this.state.transport === 'pkw' ? styles.transportSelectStyle : styles.transportStyle]}
                                      onPress={() => this.setTransport('pkw')}>
                        <Image
                            style={{}}
                            width={114}
                            height={51}
                            source={require('../../assets/transport_icons/pkw.png')}
                        />
                        <Text style={{color: '#2096f3ff', textAlign: 'center', marginTop: 10, fontSize: 18}}>
                            PKW
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[this.state.transport === 'truck' ? styles.transportSelectStyle : styles.transportStyle]}
                                      onPress={() => this.setTransport('truck')}>
                        <Image
                            style={{}}
                            width={116}
                            height={82}
                            source={require('../../assets/transport_icons/truck.png')}
                        />
                        <Text style={{color: '#2096f3ff', textAlign: 'center', marginTop: 10, fontSize: 18}}>
                            Transporter
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    transportStyle: {
        flex: 1, textAlign: 'center', alignItems: 'center'
    },
    transportSelectStyle: {
        flex: 1, textAlign: 'center', alignItems: 'center',
        borderWidth: 3,
        borderColor: '#0065f3ff',

    }
});
