import React from 'react';
import { Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const BannerCard = ({
    id,
    name,
    text,
    deleteBanner,
    showDetails
}) => {
    const onDelete = () => {
        deleteBanner(id);
    };

    const showBannerDetails = () => {
        showDetails({ id, name, text });
    };
    return (
        <Card
            id={id}
            title={name}
            extra={<CloseOutlined onClick={onDelete} />}
            style={{ width: 300 }}
            onClick={showBannerDetails}
        >
            <p>{text}</p>
        </Card>
    );
};

export default BannerCard;
