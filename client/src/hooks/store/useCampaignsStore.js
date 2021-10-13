import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaigns } from '../../actions';

const useCampaignsStore = () => {
    const dispatch = useDispatch();

    const _campaigns = useSelector(state => state.campaigns);

    const _getCampaigns = useCallback(() => {
        return dispatch(getCampaigns());
    }, [dispatch]);

    return {
        campaigns: _campaigns,
        getCampaigns: _getCampaigns,
    };
};

export default useCampaignsStore;
