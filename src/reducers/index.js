import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MeetingFormReducer from './MeetingFormReducer';
import MeetingReducer from './MeetingReducer';

export default combineReducers({
    auth: AuthReducer,
    meetingForm: MeetingFormReducer,
    meetings: MeetingReducer
});
