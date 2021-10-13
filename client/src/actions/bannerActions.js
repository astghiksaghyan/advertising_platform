import http from '../config/http-common';
import { GET_BANNERS } from '../constants';

const getBanners = (campaignId) => {
    return async (dispatch) => {
        const response = await http.get(`/banners?campaign=${campaignId}`);
        dispatch({ type: GET_BANNERS, payload: response.data });
    };
};

export {
    getBanners,
};
