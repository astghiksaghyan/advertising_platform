import React from 'react';
import { Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const BannerCard = ({
    id,
    name,
    text,
}) => {
    return (
        <Card id={id} title={name} extra={<CloseOutlined />} style={{ width: 300 }}>
            <p>{text}</p>
        </Card>
    );
};

export default BannerCard;
