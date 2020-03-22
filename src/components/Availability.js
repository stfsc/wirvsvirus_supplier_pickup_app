import * as React from 'react';
import {Alert, TextInput, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Input, Button, Text, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class Availability extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pickUpDateTimeStart: '',
            pickUpDateTimeEnd: '',
            datePickerStartVisible: false,
            datePickerEndVisible: false
        };
    }

    showDatePickerStart() {
        this.setState({datePickerStartVisible: true});
    };

    hideDatePickerStart() {
        this.setState({datePickerStartVisible: false});
    };

    showDatePickerEnd() {
        this.setState({datePickerEndVisible: true});
    };

    hideDatePickerEnd() {
        this.setState({datePickerEndVisible: false});
    };

    handleConfirmStart(datetime) {
        this.setState({
            pickUpDateTimeStart: datetime.toString(),
        });
        this.hideDatePickerStart();
    };
    handleConfirmEnd(datetime) {
        this.setState({
            pickUpDateTimeEnd: datetime.toString(),
        });
        this.hideDatePickerEnd();
    };

    render() {
        return (
            <View style={styles.container}>

                <Text h3 style={{marginBottom: 40}}>Wann kannst du eine Lieferung abholen?</Text>

                <View>
                    <Input inputStyle={{}}
                           placeholder='Datum & Uhrzeit'
                           onTouchStart={this.showDatePickerStart.bind(this)}
                           value={this.state.pickUpDateTimeStart}
                           disableFullscreenUI={true}
                           label={"Von"}
                    />

                    <View style={{marginBottom: 30}}/>

                    <Input inputStyle={{}}
                           placeholder='Datum & Uhrzeit'
                           onTouchStart={this.showDatePickerEnd.bind(this)}
                           value={this.state.pickUpDateTimeEnd}
                           disableFullscreenUI={true}
                           label={"Bis"}
                    />
                </View>

                <DateTimePickerModal
                    mode="datetime"
                    isVisible={this.state.datePickerStartVisible}
                    onConfirm={this.handleConfirmStart.bind(this)}
                    onCancel={this.hideDatePickerStart.bind(this)}
                />
                <DateTimePickerModal
                    mode="datetime"
                    isVisible={this.state.datePickerEndVisible}
                    onConfirm={this.handleConfirmEnd.bind(this)}
                    onCancel={this.hideDatePickerEnd.bind(this)}
                />

                <Button
                    large
                    buttonStyle={{marginTop: 50, width: 350}}
                    title='Speichern'
                    onPress={() => {}}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    }
});
