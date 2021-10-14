import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCampaignsStore } from '../../hooks/store';
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CheckCircleTwoTone
} from '@ant-design/icons';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const { campaigns, getCampaigns } = useCampaignsStore();

    useEffect(() => {
        getCampaigns();
    }, [getCampaigns]);

    const toggleCollapsed = () => {
        setCollapsed(isOpen => !isOpen);
    };

    const checkIsActive = (activeHours) => {
        const date = new Date();
        const hour = Number(date.toLocaleString('en-US', { hour: 'numeric', hour12: false }));
        return activeHours.includes(hour);
    };

    return (
        <div style={{ width: 256 }}>
            <Button
                type='primary'
                onClick={toggleCollapsed}
                style={{ marginBottom: 16 }}
            >
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
                theme='dark'
                inlineCollapsed={collapsed}
            >
                {campaigns.map((campaign) => {
                    const isActive = checkIsActive(campaign.activeTimes);
                    return <Menu.Item key={campaign.id} icon={<CheckCircleTwoTone twoToneColor={isActive ? '#52c41a' : '#ffffff'}/>}>
                        <Link to={`/${campaign.id}`} key={campaign.id}>{campaign.name}</Link>
                    </Menu.Item>;
                })}
            </Menu>
        </div>
    );
};

export default Sidebar;
