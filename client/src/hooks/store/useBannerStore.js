import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners, addBanner, editBanner, deleteBanner } from '../../actions';

const useBannerStore = () => {
    const dispatch = useDispatch();

    const _banners = useSelector(state => state.banners);

    const _getBanners = useCallback((campaignId) => {
        return dispatch(getBanners(campaignId));
    }, [dispatch]);

    const _addBanner = useCallback((payload) => {
        return dispatch(addBanner(payload));
    }, [dispatch]);

    const _editBanner = useCallback((payload) => {
        return dispatch(editBanner(payload));
    }, [dispatch]);

    const _deleteBanner = useCallback((id) => {
        return dispatch(deleteBanner(id));
    }, [dispatch]);

    return {
        banners: _banners,
        getBanners: _getBanners,
        addBanner: _addBanner,
        editBanner: _editBanner,
        deleteBanner: _deleteBanner,
    };
};

export default useBannerStore;
