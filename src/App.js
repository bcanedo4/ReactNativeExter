import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
