import React from 'react';
import { Form, Input, Button } from 'antd';

const BannerDetails = ({
    id,
    name,
    text,
    onSubmit
}) => {
    const onFinish = (values) => {
        onSubmit({ ...values, id: id });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
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
                <Input defaultValue={name}/>
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
                <Input defaultValue={text}/>
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