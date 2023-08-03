// import 'antd/dist/antd.css';
import { Button, Input, Form } from 'antd';
import React from 'react'
import "./formAdd.scss"

const FormAdd = () => {
    // let NewProduct = {
    //     img: "",
    //     nameProduct: "",
    //     promotion: '',
    //     price: ''
    // }
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="img"
                    name="img"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="nameProduct"
                    name="nameProduct"
                    rules={[
                        {
                            required: true,
                            message: 'Please input nameProduct!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="promotion"
                    name="promotion"
                    rules={[
                        {
                            required: true,
                            message: 'Please input promotion!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input price!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        ADD
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default FormAdd