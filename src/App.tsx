import React from 'react';
import "./styles/app.scss";
import { Header } from './components';
import { Home, Signin, Signup } from './pages';
import { Route, Switch } from 'react-router-dom';
import { Logo } from './components';
import MoonSrc from './assets/images/moon.png';
import SunSrc from './assets/images/sun.png';
import { Switch as SwitchBtn } from 'antd';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <footer className="footer">
        <div className="footer__container _container">
          <div className="footer__wrapper">
            <div className="footer__content content-footer">
              <div className="content-footer__title">
                <Logo className="logo_footer" />
              </div>
              <div className="content-footer__text">
                Ресурс видеоуроков для защиты от мошенников и разных видов атак. Узнай о видах атак, уловок, которые применяются в современном мире и защити себя и своих близких.
            </div>
            </div>
            <div className="footer__categories categories-footer">
              <div className="categories-footer__title">Категории</div>
              <ul className="categories-footer__list">
                <li className="categories-footer__item">
                  <a href="#" className="categories-footer__link">Все курсы</a>
                </li>
                <li className="categories-footer__item">
                  <a href="#" className="categories-footer__link">Dos атака</a>
                </li>
                <li className="categories-footer__item">
                  <a href="#" className="categories-footer__link">Фишинг атака</a>
                </li>
                <li className="categories-footer__item">
                  <a href="#" className="categories-footer__link">Вирусы</a>
                </li>
                <li className="categories-footer__item">
                  <a href="#" className="categories-footer__link">Сетевая разведка</a>
                </li>
              </ul>
            </div>
            <div className="footer__background background-footer">
              <div className="background-footer__title">Темы:</div>
              <div className="background-footer__switch">
                  <img src={MoonSrc} alt="dark background"/>
                  <SwitchBtn defaultChecked onChange={() => console.log('changed')} className="background-footer__switch-btn"/>
                  <img src={SunSrc} alt="light background"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
