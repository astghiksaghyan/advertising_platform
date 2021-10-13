import http from '../config/http-common';
import { GET_CAMPAIGNS } from '../constants';

const getCampaigns = () => {
    return async (dispatch) => {
        const response = await http.get('/campaign/');
        dispatch({ type: GET_CAMPAIGNS, payload: response.data });
    };
};

export {
    getCampaigns,
};
