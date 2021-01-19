import React from 'react';
import { Button } from 'antd';
import "../styles/components/Header.scss";
import { SearchOutlined, DownOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__left left-header">
                    <a className="left-header__item left-header__item_logo" href="#">
                        Cyber<span>Security</span>
                    </a>
                    <a className="left-header__item left-header__item_dropdown" href="#">
                        Категории <DownOutlined />
                        <ul className="left-header__dropdown dropdown">
                            <li className = "dropdown__item"><a href="" className="dropdown__link">Frontend</a></li>
                            <li className = "dropdown__item"><a href="" className="dropdown__link">Backend</a></li>
                        </ul>
                    </a>
                    <a className="left-header__item" href="#">
                        Все курсы
                    </a>
                </div>
                <div className="header__right right-header">
                    <span className="right-header__icon"><SearchOutlined /></span>
                    <Button className="right-header__signup button">Регистрация</Button>
                    <Button className="right-header__signup button">Войти</Button>
                </div>
            </div>
        </header>
    )
};

export default Header;