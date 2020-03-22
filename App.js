import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {Provider} from "react-redux";
import {configureStore} from "./src/store/Store";
import Main from "./src/components/Main";

const store = configureStore();

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
              <Main></Main>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default App;
