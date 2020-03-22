import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import connect from "react-redux/lib/connect/connect";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./Login";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AuthApp from "./AuthApp";

const Stack = createStackNavigator();

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    onLogin() {
        this.props.navigation.navigate('SetLocation');
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {this.props.loggedIn ? (
                        <Stack.Screen
                            name="AuthApp"
                            component={AuthApp}
                        />
                    ) : (
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{headerShown: false}}
                        />
                    )}
                </Stack.Navigator>

            </NavigationContainer>
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

export default connect(mapStateToProps) (Main);
