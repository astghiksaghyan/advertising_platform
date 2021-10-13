import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHours } from '../../actions';

const useHoursStore = () => {
    const dispatch = useDispatch();

    const _hours = useSelector(state => state.hours);

    const _getHours = useCallback(() => {
        return dispatch(getHours());
    }, [dispatch]);

    return {
        hours: _hours,
        getHours: _getHours,
    };
};

export default useHoursStore;
