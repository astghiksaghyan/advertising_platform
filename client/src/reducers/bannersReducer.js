import {
    GET_BANNERS,
    ADD_BANNER,
    EDIT_BANNER,
    DELETE_BANNER,
} from '../constants';

const initialState = [];

const bannersReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_BANNERS:
        return action.payload;
    case ADD_BANNER:
        return [...state, action.payload];
    case EDIT_BANNER:
        return state.map((banner) => {
            return banner.id !== action.payload.id ? banner : action.payload;
        });
    case DELETE_BANNER:
        return state.filter((banner) => {
            return banner.id !== action.payload;
        });
    default:
        return state;
    }
};

export default bannersReducer;
