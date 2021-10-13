import http from '../config/http-common';
import { GET_HOURS } from '../constants';

const getHours = () => {
    return async (dispatch) => {
        const response = await http.get('/hours/');
        dispatch({ type: GET_HOURS, payload: response.data });
    };
};

export {
    getHours,
};
