import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MeetingList from './components/MeetingList';
import MeetingCreate from './components/MeetingCreate';

const RouterComponent = () => (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login to Exter" initial />
                </Scene>
                <Scene key="main">
                    <Scene 
                        onRight={() => Actions.meetingCreate()}
                        rightTitle="Add"
                        key="meetingList"
                        component={MeetingList}
                        title="Meetings"
                        initial
                    />
                </Scene>
                <Scene key="meetingCreate" component={MeetingCreate} title="Create Meeting" />
            </Scene>
        </Router>
    );

export default RouterComponent;
