import React from 'react';
import "../styles/pages/Home.scss";
import { Button } from 'antd';

const Home = () => {
    return (
        <div className="main-page">
            <section className="introduction">
                <div className="introduction__container _container">
                    <div className="introduction__content content-introduction">
                        <h3 className="content-introduction__title">Кибербезопасность</h3>
                        <p className="content-introduction__text">С развитием информационных и компьютерных
                        технологий проблемы правового регулирования вопросов связанных
                        с информационной и кибернетической безопасностью набирают все
                        большую популярность и актуальность. наши курсы  и статьи
                        помогут тебе не стать жертвой злоумышленников. начни учить
         прям сейчас совершенно бесплатно</p>
                        <Button className="mybutton mybutton_lg">Начать сейчас</Button>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;