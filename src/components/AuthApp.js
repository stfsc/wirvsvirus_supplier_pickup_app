import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import connect from "react-redux/lib/connect/connect";
import {logout} from "../actions/LoginActions";
import Welcome from "./Welcome";
import SetLocation from "./SetLocation";
import Profile from "./Profile";
import Availability from "./Availability";
import Map from "./Map";
import Delivery from "./Delivery";

const Tab = createBottomTabNavigator();

class AuthApp extends React.Component {

    constructor(props) {
        super(props);

        this.props.navigation.setOptions({
            title: 'Willkommen bei PickUp',
            headerRight: () => (
                <Button
                    onPress={() => this.logout()}
                    title="Logout"
                />
            )
        });

    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" size={25} color="#2096f3ff"/>
                        ),
                    }}/>
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profil',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="user" size={25} color="#2096f3ff"/>
                        ),
                    }}/>
                <Tab.Screen
                    name="Delivery"
                    component={Delivery}
                    options={{
                        tabBarLabel: 'Lieferungen',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="truck" size={25} color="#2096f3ff"/>
                        ),
                    }}/>
                <Tab.Screen
                    name="Availability"
                    component={Availability}
                    options={{
                        tabBarLabel: 'Verfügbarkeit',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="clock" size={25} color="#2096f3ff"/>
                        ),
                    }}/>
                <Tab.Screen
                    name="Map"
                    component={Map}
                    options={{
                        tabBarLabel: 'Ansicht',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="map" size={25} color="#2096f3ff"/>
                        ),
                    }}/>
            </Tab.Navigator>
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

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthApp);
