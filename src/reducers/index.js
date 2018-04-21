import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MeetingReducer from './MeetingReducer';

export default combineReducers({
    auth: AuthReducer,
    meetings: MeetingReducer
});
