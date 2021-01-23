import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Signin = () => {
    const onFinish = () => {
        console.log('finished');
    }

    return (
        <div className="auth">
            <div className="auth__form">
                <h3 className="auth__title">Войти в аккуант</h3>
                <Form
                    name="normal_login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Логин"
                            className="signin-input"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                            className="signin-input"
                            allowClear
                        />
                    </Form.Item>
                    <a href="#" className="forget-password" >  Забыли пароль ?</a>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button mybutton mybutton_rounded"> Войти  </Button>
                        <a href="#" className="signup-link">Зарегистрироваться</a>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )
};

export default Signin;