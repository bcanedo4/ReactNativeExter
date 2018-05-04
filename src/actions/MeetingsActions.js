import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    MEETING_UPDATE,
    MEETING_CREATE,
    MEETINGS_FETCH_SUCCESS,
    MEETING_SAVE_SUCCESS,
    MEETING_ADD_MEMBERS
} from './types';

export const meetingUpdate = ({ prop, value }) => {
    return {
        type: MEETING_UPDATE,
        payload: { prop, value }
    };
};

export const meetingCreate = ({ name, location, day, group }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings`)
        .push({ name, location, day, group })
        .then(() => {
            dispatch({ type: MEETING_CREATE });
            Actions.pop();
        });
    };
};

export const meetingAddMembers = ({ member }) => {
    const { currentUser } = firebase.auth();
    const newMember = firebase.database().ref().child('posts').push().key;

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings/${newMember}`)
        .push({ member })
        .then(() => {
            dispatch({ type: MEETING_ADD_MEMBERS });
        });
    };
};

// .then((snapshot) => {
//     const meetingId = snapshot.key;
//     firebase.database().ref(`/users/${currentUser.uid}/meetings/${meetingId}`)
//     .push({ member, phone });
// })

export const meetingsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings`)
            .on('value', snapshot => {
                dispatch({ type: MEETINGS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const meetingSave = ({ name, location, day, group, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings/${uid}`)
        .set({ name, location, day, group })
        .then(() => {
            dispatch({ type: MEETING_SAVE_SUCCESS });
            Actions.pop();
        });
    };
};

export const meetingDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings/${uid}`)
            .remove()
            .then(() => {
                Actions.pop();
            });
    };
};
