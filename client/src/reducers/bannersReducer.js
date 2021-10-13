import { GET_BANNERS } from '../constants';

const initialState = [];

const bannersReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_BANNERS:
        return action.payload;
    default:
        return state;
    }
};

export default bannersReducer;
