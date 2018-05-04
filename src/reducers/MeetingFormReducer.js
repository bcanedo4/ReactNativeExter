import {
    MEETING_CREATE, 
    MEETING_UPDATE, 
    MEETING_SAVE_SUCCESS,
    MEETING_ADD_MEMBER
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    location: '',
    day: '',
    group: '',
    member: '',
    phone: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEETING_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case MEETING_CREATE:
            return INITIAL_STATE;
        case MEETING_SAVE_SUCCESS:
            return INITIAL_STATE;
        case MEETING_ADD_MEMBER: 
            return INITIAL_STATE;
        default:
            return state;
    }
};
