import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ILoginInfo } from '../types/interfaces';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { FormikErrors } from 'formik';
import { login } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import withAuthCheck from '../hoc/withAuthCheck';

const Signin = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values: ILoginInfo) => {
            const errors: FormikErrors<ILoginInfo> = {};
            if (!values.email) {
                errors.email = 'Обязательное поле';
            } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
                errors.email = "Не правильный логин";
            }

            if (!values.password) {
                errors.password = "Обязательное поле";
            }

            return errors;
        },
        onSubmit: (values: ILoginInfo, { setFieldError }) => {
            dispatch(login(values.email!, values.password!, setFieldError));
        }
    });

    return (
        <div className="auth">
            <div className="auth__form">
                <h3 className="auth__title">Войти в аккуант</h3>
                <Form onFinish={formik.handleSubmit} >
                    <Form.Item
                        name="email"
                        hasFeedback={formik.touched.email}
                        validateStatus={formik.touched.email && formik.errors.email ? 'error' : 'success'}
                        help={formik.errors.email && formik.errors.email}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Логин"
                            className="signin-input"
                            value={formik.values.email!}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback={formik.touched.password}
                        validateStatus={formik.touched.password && formik.errors.password ? 'error' : 'success'}
                        help={formik.errors.password && formik.errors.password}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                            className="signin-input"
                            allowClear
                            value={formik.values.email!}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>
                    <a href="#" className="forget-password" >  Забыли пароль ?</a>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button mybutton mybutton_rounded"
                            disabled={!formik.isValid || !formik.dirty}
                        >
                            Войти
                        </Button>
                        <Link to="/signup" className="signup-link">Зарегистрироваться</Link>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )
};

export default withAuthCheck(Signin);