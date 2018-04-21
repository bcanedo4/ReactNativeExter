import firebase from 'firebase';
import {
    MEETINGS_FETCH_SUCCESS
} from './types';

export const meetingsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/meetings`)
            .on('value', snapshot => {
                dispatch({ type: MEETINGS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
