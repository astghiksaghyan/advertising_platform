import { GET_HOURS } from '../constants';

const initialState = [];

const hoursReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_HOURS:
        return action.payload;
    default:
        return state;
    }
};

export default hoursReducer;
