import React from 'react'
import { Button, Col, Collapse, Form, Input, message, Row } from 'antd';
import "./Logup.scss"
import axios from 'axios';
import { v4 as uuidv4 } from "uuid"
import { postAPI } from '../../services/Servies';
import { useNavigate } from 'react-router-dom';
// const onFinish = (values) => {
//     console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };

const Logup = () => {
    const navigate = useNavigate()
    const OncloseHandle = () => {
        console.log("123");
        navigate("/login")
    }
    const onFinish = (values) => {
        const id = uuidv4();
        axios.get("https://64c481e967cfdca3b660cf14.mockapi.io/api/dataUsers")
            .then((rs) => {
                const checkName = rs.data.some((item) => item.Username === values.Username)
                if (checkName) {
                    alert("UserName đã tồn tại");
                }
                else {
                    values = { id: id, ...values }
                    console.log('Success:', values);
                    postAPI(values)
                    message.success({
                        content: 'Thông báo thành công',
                        duration: 1,
                        onClose: OncloseHandle
                    });
                }
            })
    };
    return (
        <div className='formLogup'>
            <Form
                name="basic"

                wrapperCol={{
                    span: 24,
                }}

                className="center-FormLogup"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

                autoComplete="off"
            >
                <h3> ĐĂNG KÝ TÀI KHOẢN</h3>
                <Form.Item
                    className='itemForm'
                    labelCol={{ span: 24 }}
                    label="Username"
                    name="Username"
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
                    className='itemForm'
                    labelCol={{ span: 24 }}
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                            type: "email",
                            message: "emai chưa đúng"
                        },
                    ]}
                >
                    <Input className='itemInput' />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 24 }}
                    label="Password"
                    name="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                            // type: "number",
                            // message: "nhập số",
                            // min: 8,
                            // message: "ít nhất 8 chữ số"
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 24 }}
                    label="Phone"
                    name="Phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        ĐĂNG KÝ
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Logup;
