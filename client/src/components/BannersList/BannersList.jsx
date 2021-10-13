import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBannerStore } from '../../hooks/store';
import BannerCard from '../BannerCard/BannerCard';

import './BannersList.css';

const BannersList = () => {
    const { banners, getBanners } = useBannerStore();
    const { id } = useParams();

    useEffect(() => {
        getBanners(+id);
    }, [getBanners, id]);

    const addBanner = () => {
        console.log('Banner added');
    };

    return (
        <div className="container">
            <div className="grid-container">
                {banners && Object.keys(banners).length
                    ? banners.map(banner => <BannerCard
                        key={banner.name + banner.id}
                        id={banner.id}
                        name={banner.name}
                        text={banner.text}
                    />)
                    : <span>No item</span>}
                <span className="load-more-button" onClick={addBanner}>+</span>
            </div>
        </div>
    );
};

export default BannersList;
