import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, FormOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IRegisterInfo } from '../types/interfaces';
import { useFormik } from 'formik';
import { FormikErrors } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TAppState } from '../redux/reducers/index';
import { Redirect } from 'react-router-dom';
import { actionCreators } from '../redux/actions/auth';
import withAuthCheck from '../hoc/withAuthCheck';

const Signup = () => {
    const dispatch = useDispatch();
    const isRegistered = useSelector((state: TAppState) => state.auth.isRegistered);

    useEffect(() => {
        return () => {
            dispatch(actionCreators.registerDataReset());
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            repeatPassword: ""
        },
        validate: (values: IRegisterInfo) => {
            const errors: FormikErrors<IRegisterInfo> = {};
            if (!values.email) {
                errors.email = 'Обзательное поле';
            } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
                errors.email = "Не правильный логин";
            }

            if (!values.password) {
                errors.password = "Обязательное поле";
            } else if (values.password.length <= 5) {
                errors.password = "Пароль должен быть не менее 5 символов";
            }

            if (!values.repeatPassword) {
                errors.repeatPassword = "Обязательное поле";
            } else if (values.repeatPassword.length <= 5) {
                errors.repeatPassword = "Пароль должен быть не менее 5 символов";
            } else if (values.repeatPassword !== values.password) {
                errors.repeatPassword = "Пароли не совпадают";
            }

            if (!values.first_name) {
                errors.first_name = "Обязательное поле";
            }

            if (!values.last_name) {
                errors.last_name = "Обязательное поле";
            }

            return errors;
        },
        onSubmit: (values: IRegisterInfo, { setFieldError }) => {
            dispatch(register(values.email!, values.first_name!, values.last_name!, values.password!, setFieldError));
        }
    });

    if (isRegistered) {
        return <Redirect to="/signin" />
    }

    return (
        <div className="auth">
            <div className="auth__form">
                <h3 className="auth__title">Зарегистрироваться</h3>
                <Form onFinish={formik.handleSubmit} >
                    <Form.Item
                        name="first_name"
                        hasFeedback={formik.touched.first_name}
                        validateStatus={formik.touched.first_name && formik.errors.first_name ? 'error' : 'success'}
                        help={formik.errors.first_name && formik.errors.first_name}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Name"
                            value={formik.values.first_name!}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        hasFeedback={formik.touched.last_name}
                        validateStatus={formik.touched.last_name && formik.errors.last_name ? 'error' : 'success'}
                        help={formik.errors.last_name && formik.errors.last_name}
                    >
                        <Input
                            prefix={<FormOutlined className="site-form-item-icon" />}
                            placeholder="Surname"
                            value={formik.values.last_name!}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        hasFeedback={formik.touched.email}
                        validateStatus={formik.touched.email && formik.errors.email ? 'error' : 'success'}
                        help={formik.errors.email && formik.errors.email}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="Email"
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
                            placeholder="Password"
                            allowClear
                            value={formik.values.password!}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>

                    <Form.Item
                        name="repeatPassword"
                        hasFeedback={formik.touched.repeatPassword}
                        validateStatus={formik.touched.repeatPassword && formik.errors.repeatPassword ? 'error' : 'success'}
                        help={formik.errors.repeatPassword && formik.errors.repeatPassword}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            allowClear
                            value={formik.values.repeatPassword!}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>

                    <Form.Item>
                        <div className="center">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="mybutton mybutton_block mybutton_rounded"
                                disabled={!formik.isValid || !formik.dirty}
                            >
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

export default withAuthCheck(Signup);