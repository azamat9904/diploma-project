import React from 'react';
import { Button } from 'antd';
import { Dropdown, Logo, Search } from './index';
import "../styles/components/Header.scss";
import { Link } from 'react-router-dom';

const dropdownElements = [
    {
        title: 'Frontend',
        href: '/'
    },
    {
        title: 'Backend',
        href: '/'
    }
];

const dropdownTitle = "Категории";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__left left-header">
                    <Logo />
                    <Dropdown
                        dropdownTitle={dropdownTitle}
                        dropdownElements={dropdownElements}
                    />
                    <a className="left-header__item" href="#">
                        Все курсы
                    </a>
                </div>
                <div className="header__right right-header">
                    <span className="right-header__icon"><Search /></span>
                    <Link className="mybutton right-header__signup" to="/signup">Регистрация</Link>
                    <Link className="mybutton right-header__signin" to="/signin">Войти</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;