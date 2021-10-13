import { GET_CAMPAIGNS } from '../constants';

const initialState = [];

const campaignsReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_CAMPAIGNS:
        return action.payload;
    default:
        return state;
    }
};

export default campaignsReducer;
