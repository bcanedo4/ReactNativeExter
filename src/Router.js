import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MeetingList from './components/MeetingList';
import MeetingCreate from './components/MeetingCreate';
import MeetingEdit from './components/MeetingEdit';
import MeetingAddMembers from './components/MeetingAddMembers';

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
                <Scene 
                    key="meetingCreate" 
                    component={MeetingCreate} 
                    title="Create Meeting" 
                />
                <Scene
                    key="meetingEdit"
                    component={MeetingEdit}
                    title="Edit Meeting"
                />
                <Scene 
                    key="meetingAddMembers" 
                    component={MeetingAddMembers} 
                    title="Add Members" 
                />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;
