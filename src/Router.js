import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MeetingList from './components/MeetingList';

const RouterComponent = () => (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login to Exter" initial />
                </Scene>
                <Scene key="main">
                    <Scene 
                        key="meetingList"
                        component={MeetingList}
                        title="Meetings"
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );

export default RouterComponent;
