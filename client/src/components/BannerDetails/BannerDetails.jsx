import React, { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useCampaignsStore } from '../../hooks/store';

const { Option } = Select;

const BannerDetails = ({
    id,
    name,
    text,
    campaign,
    onSubmit
}) => {

    const [form] = Form.useForm();

    const { campaigns } = useCampaignsStore();

    useEffect(() => {
        form.setFieldsValue({ name, text, campaign });
    }, [form, name, text, campaign]);

    const onFinish = (values) => {
        onSubmit({ ...values, id: id });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const getSelectChildren = () => {
        return campaigns.map((campaign) => {
            return <Option
                key={campaign.name + campaign.id}
                value={campaign.id}
            >
                {campaign.name}
            </Option>;
        });
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input banner name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Text"
                name="text"
                rules={[
                    {
                        required: true,
                        message: 'Please input banner text!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Campaign"
                name="campaign"
                rules={[
                    {
                        required: true,
                        message: 'Please select banner campaign!',
                    },
                ]}
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                >
                    {getSelectChildren()}
                </Select>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default BannerDetails;
