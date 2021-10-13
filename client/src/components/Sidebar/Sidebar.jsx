import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCampaignsStore } from '../../hooks/store';
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ThunderboltOutlined
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
                    return <Menu.Item key={campaign.id} icon={<ThunderboltOutlined />}>
                        <Link to={`/${campaign.id}`} key={campaign.id}>{campaign.name}</Link>
                    </Menu.Item>;
                })}
            </Menu>
        </div>
    );
};

export default Sidebar;
