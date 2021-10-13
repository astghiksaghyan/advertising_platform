import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from '../../actions';

const useBannerStore = () => {
    const dispatch = useDispatch();

    const _banners = useSelector(state => state.banners);

    const _getBanners = useCallback((campaignId) => {
        return dispatch(getBanners(campaignId));
    }, [dispatch]);

    return {
        banners: _banners,
        getBanners: _getBanners,
    };
};

export default useBannerStore;
