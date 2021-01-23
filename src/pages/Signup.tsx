import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, FormOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Signup = () => {
    const onFinish = () => {
        console.log('finished');
    }

    return (
        <div className="auth">
            <div className="auth__form">
                <h3 className="auth__title">Зарегистрироваться</h3>
                <Form>
                    <Form.Item name="name" >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Name"
                        />
                    </Form.Item>
                    <Form.Item name="surname">
                        <Input prefix={<FormOutlined className="site-form-item-icon" />} placeholder="Surname" />
                    </Form.Item>
                    <Form.Item
                        name="email"

                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="Email"

                        />
                    </Form.Item>
                    <Form.Item
                        name="password"

                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"

                            allowClear
                        />
                    </Form.Item>

                    <Form.Item
                        name="repeatPassword"

                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            allowClear
                        />
                    </Form.Item>

                    <Form.Item>
                        <div className="center">
                            <Button type="primary" htmlType="submit" className="mybutton mybutton_block mybutton_rounded" >
                                Зарегистрироваться
                    </Button>
                        </div>
                    </Form.Item>
                    <div className="signin-link">
                        <Link to="/signin" >Войти на сайт</Link>
                    </div>
                </Form>
            </div>
        </div >
    )
};

export default Signup;