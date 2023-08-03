import React from 'react'
import { Button, Col, Collapse, Form, Input, message } from 'antd';
import "../logup/Logup.scss"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import StorContext from '../../contexts/stor';
import { useEffect } from 'react';


// const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };

const Login = () => {
    const { stateloginUser, setstateloginUser, stateloginAdm, setstateloginAdm } = useContext(StorContext)
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        axios.get("https://64c481e967cfdca3b660cf14.mockapi.io/api/dataUsers")
            .then((rs) => {
                if (rs.data.some((item) => item.Username === values.Username &&
                    item.Password === values.Password)) {
                    sessionStorage.setItem('account', JSON.stringify(values))
                    message.success({
                        content: "đăng nhập thành công",
                        duration: 2,
                        // onClose: oncloseHandle
                    })
                    setstateloginUser(true);
                    navigate('/');
                }
                else {
                    axios.get("https://64c481e967cfdca3b660cf14.mockapi.io/api/datadmin").then((rs) => {
                        if (rs.data.some((item) => item.Username === values.Username &&
                            item.Password === values.Password)) {
                            sessionStorage.setItem('account', JSON.stringify(values))
                            message.success({
                                content: "đăng nhập ADM thành công",
                                duration: 2,
                                // onClose: oncloseHandle
                            })
                            setstateloginAdm(true);
                            navigate('/');
                        }
                        else {
                            alert('usename hoặc Password không đúng')
                        }
                    }
                    )
                }
            })
    };
    return (
        <div className='formLogup'>
            <Form
                name="basic"
                // labelCol={{
                //     span: 8,
                // }}
                wrapperCol={{
                    span: 24,
                }}
                className="center-FormLogup"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h3> ĐĂNG NHẬP </h3>
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
                    labelCol={{ span: 24 }}
                    label="Password"
                    name="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
                <div><span>Nếu chứa có tài khoản vui lòng </span>
                    <NavLink to="./logup"> Đăng ký</NavLink>
                </div>

            </Form>
        </div>
    )
};
export default Login;
