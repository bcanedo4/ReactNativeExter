import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBsm9EuIEJIXY_KE4yekgPB2O3iG0OaGEQ',
            authDomain: 'exter-8dff0.firebaseapp.com',
            databaseURL: 'https://exter-8dff0.firebaseio.com',
            projectId: 'exter-8dff0',
            storageBucket: 'exter-8dff0.appspot.com',
            messagingSenderId: '121786210904'
          };

          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        EXTER
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
