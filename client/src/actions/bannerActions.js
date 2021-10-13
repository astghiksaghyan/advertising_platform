import http from '../config/http-common';
import {
    GET_BANNERS,
    ADD_BANNER,
    EDIT_BANNER,
    DELETE_BANNER,  
} from '../constants';


const getBanners = (campaignId) => {
    return async (dispatch) => {
        const response = await http.get(`/banners?campaign=${campaignId}`);
        dispatch({ type: GET_BANNERS, payload: response.data });
    };
};

const addBanner = (payload) => {
    return async (dispatch) => {
        const response = await http.post('/banners/', payload);
        dispatch({ type: ADD_BANNER, payload: response.data });
    };
};

const editBanner = (payload) => {
    return async (dispatch) => {
        const response = await http.put(`/banners/${payload.id}/`, payload);
        dispatch({ type: EDIT_BANNER, payload: response.data });
        return response.data;
    };
};

const deleteBanner = (payload) => {
    return async (dispatch) => {
        await http.delete(`/banners/${payload}/`);
        dispatch({ type: DELETE_BANNER, payload: payload });
    };
};

export {
    getBanners,
    addBanner,
    editBanner,
    deleteBanner
};
