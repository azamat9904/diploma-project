import React from 'react';
import { Dropdown, Logo, Search } from './index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TAppState } from '../redux/reducers/index';
import { UserOutlined } from '@ant-design/icons';
import "../styles/components/Header.scss";

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

const profileDropdownElemenets = [
    {
        title: 'Личный кабинет',
        href: '/cabinet'
    },
    {
        title: 'Закладки',
        href: '/booking'
    },
    {
        title: 'История',
        href: '/history'
    },
    {
        title: 'Выйти',
        href: '/logout'
    }
];


const Header = () => {

    const isAuthorized = useSelector((state: TAppState) => state.auth.isAuthorized);
    const el = <><UserOutlined /> <span className="text">Профиль</span></>

    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__left left-header">
                    <Logo />
                    <Dropdown
                        dropdownTitle={"Категории"}
                        dropdownElements={dropdownElements}
                    />
                    <a className="left-header__item" href="#">
                        Все курсы
                    </a>
                </div>
                <div className="header__right right-header">
                    <span className="right-header__icon"><Search /></span>
                    {
                        !isAuthorized ? <>
                            <Link className="mybutton right-header__signup" to="/signup">Регистрация</Link>
                            <Link className="mybutton right-header__signin" to="/signin">Войти</Link>
                        </> : <>
                                <Dropdown
                                    dropdownTitle={el}
                                    dropdownElements={profileDropdownElemenets}
                                    className="profile"
                                />
                            </>
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;