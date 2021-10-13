import { combineReducers } from 'redux';
import { campaignsReducer, bannersReducer, hoursReducer } from '../reducers';

const allReducers = combineReducers({
    banners: bannersReducer,
    campaigns: campaignsReducer,
    hours: hoursReducer,
});

export default allReducers;
