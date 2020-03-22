import * as React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, TouchableHighlight, View, Modal} from 'react-native';
import {Button, Text, List, ListItem, Overlay} from 'react-native-elements';
import MapView from "react-native-maps";
import Icon from 'react-native-vector-icons/Feather';

export default class Delivery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            deliveryItems: [
                {
                    key: "01",
                    name: "Muster Str. 678, 10246 Musterstadt",
                    type: "Abholung",
                    icon: <Icon name="check-circle" size={25} color="#1ebf12ff"/>
                },
                {
                    key: "02",
                    name: "Lange Allee 369, 13567 Musterstadt",
                    type: "Abholung",
                    icon: <Icon name="check-circle" size={25} color="#1ebf12ff"/>
                },
                {
                    key: "03",
                    name: "Langer Seitenweg 345, 15356 Musterstadt",
                    type: "Abholung",
                    icon: <Icon name="check-circle" size={25} color="#1ebf12ff"/>
                },
                {
                    key: "04",
                    name: "Sesamstr. 137, 12345 Musterstadt",
                    type: "Abholung"
                },
                {
                    key: "05",
                    name: "Philadelphia Straße 93, 14563 Musterstadt",
                    type: "Abholung"
                },
                {
                    key: "06",
                    name: "Hauptstr. 3, 14726 Musterstadt",
                    type: "Abholung"
                },
                {
                    key: "07",
                    name: "Seitenstraße 10, 12347 Musterstadt",
                    type: "Abholung"
                }
            ]
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    renderDeliveryItem = ({item}) => (
        <ListItem
            title={item.name}
            subtitle={item.type}
            bottomDivider={true}
            rightIcon={item.icon}
            onPress={() => this.setModalVisible(true)}
        />

    );

    render() {
        return (
            <View style={styles.container}>

                <Text h4 style={{color: '#707070', textAlign: 'center', marginTop: 30}}>Lieferungen</Text>

                <FlatList
                    style={{marginTop: 20}}
                    renderItem={this.renderDeliveryItem}
                    data={this.state.deliveryItems}/>

                <Overlay
                    isVisible={this.state.modalVisible}
                    onBackdropPress={() => this.setState({modalVisible: false})}
                    overlayStyle={{height: 300}}
                >
                    <View>
                        <View style={{}}>
                            <Text style={{color: '#727272ff', paddingLeft: 10, paddingTop: 10}}>ID: 1235</Text>
                            <Text style={{paddingLeft: 10}}>Segment Pharmazie</Text>
                            <Text style={{paddingLeft: 10}}>Paketgröße: M</Text>
                        </View>

                        <View style={{marginBottom: 70}}>
                            <Text style={{color: '#727272ff', paddingLeft: 10, paddingTop: 30}}>Abholung</Text>
                            <Text style={{paddingLeft: 10}}>Muster Str. 678</Text>
                            <Text style={{paddingLeft: 10}}>10246 Musterstadt</Text>
                        </View>


                        <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                            <Icon style={{margin: 30}} name='navigation' size={40} color="#2096f3ff"/>
                            <Icon style={{margin: 30}} name='phone' size={40} color="#2096f3ff"/>
                            <Icon style={{margin: 30}} name='check' size={40} color="#2096f3ff"/>
                        </View>
                    </View>

                </Overlay>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    transportStyle: {
        flex: 1, textAlign: 'center', alignItems: 'center'
    },
    transportSelectStyle: {
        flex: 1, textAlign: 'center', alignItems: 'center',
        borderWidth: 3,
        borderColor: '#0065f3ff',

    }
});
