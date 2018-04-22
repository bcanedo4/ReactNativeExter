import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    MEETING_UPDATE,
    MEETING_CREATE,
    MEETINGS_FETCH_SUCCESS
} from './types';

export const meetingUpdate = ({ prop, value }) => {
    return {
        type: MEETING_UPDATE,
        payload: { prop, value }
    };
};

export const meetingCreate = ({ name, location, time, group }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings`)
        .push({ name, location, time, group })
        .then(() => {
            dispatch({ type: MEETING_CREATE });
            Actions.pop();
        });
    };
};

export const meetingsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings`)
            .on('value', snapshot => {
                dispatch({ type: MEETINGS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
