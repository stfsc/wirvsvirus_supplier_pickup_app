import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {login} from "../actions/LoginActions";
import connect from "react-redux/lib/connect/connect";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    onLogin() {
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={{marginBottom: 20}}
                    width={140}
                    height={130}
                    source={require('../../assets/logo.png')}
                />

                <Text style={{textAlign: 'center', marginBottom: 60, marginTop: 0, fontSize: 18}}>
                    Kurier-App
                </Text>

                <Input
                    placeholder='E-Mail'
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />

                <Input
                    inputStyle={styles.input}
                    placeholder='Password'
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />

                <Button
                    large
                    buttonStyle={{marginTop: 40, width: 350}}
                    title='Login'
                    onPress={() => this.onLogin()}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: 'white'
    },
    input: {
        marginTop: 10,
        width: 300,
    },
    button: {
        width: 300,
        height: 44,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#4fdbffff',
        marginBottom: 10,
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 128,
        width: 128,
    }
});

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Login);
