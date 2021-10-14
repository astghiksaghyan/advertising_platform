import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'antd';

import { useBannerStore } from '../../hooks/store';
import BannerCard from '../BannerCard/BannerCard';
import BannerDetails from '../BannerDetails/BannerDetails';
import './BannersList.css';

const BannersList = () => {
    const { banners, getBanners, addBanner, editBanner, deleteBanner } = useBannerStore();
    const { id } = useParams();

    const [currentBanner, setCurrentBanner] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setCurrentBanner(null);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setCurrentBanner(null);
    };

    useEffect(() => {
        getBanners(+id);
    }, [getBanners, id]);

    const showDetails = (banner) => {
        setCurrentBanner(banner);
        setIsModalVisible(true);
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
                        deleteBanner={deleteBanner}
                        showDetails={showDetails}
                    />)
                    : <span>No item</span>}
                <span className="load-more-button" onClick={showModal}>+</span>
            </div>
            <Modal
                title={currentBanner ? 'Edit banner' : 'Add banner'}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <BannerDetails
                    id={currentBanner ? currentBanner.id : null}
                    name={currentBanner ? currentBanner.name : ''}
                    text={currentBanner ? currentBanner.text : ''}
                    campaign={currentBanner ? currentBanner.campaign : []}
                    onSubmit={currentBanner ? editBanner : addBanner}
                />
            </Modal>
        </div>
    );
};

export default BannersList;
