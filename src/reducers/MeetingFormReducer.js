import {
    MEETING_CREATE, MEETING_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    location: '',
    time: '',
    group: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEETING_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case MEETING_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
