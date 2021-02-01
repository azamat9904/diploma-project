import React from 'react';
import "../styles/pages/Home.scss";
import { Button } from 'antd';
import {Card} from '../components';

const element = {
    title: "IIQ Полный курс",
    text: " Изучите идентификацию и управление доступом, станьте разработчиком IIQ. Этот курс позволяет вам сделать первый шаг, чтобы обезопасить свое будущее с помощью одного из востребованных продуктов для кибербезопасности - IIQ, лидера на рынке Identity Management.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    rating: '4.7',
    duration: '2',
    url: 'card1'
};

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
           
             <section className="courses">
                <div className="courses__container _container">
                     <div className="courses__content">
                         <h3 className="courses__title">Последние добавленные курсы</h3>
                         <div className="courses__list">
                             <Card
                                  title={element.title} 
                                  text={element.text}
                                  rating={element.rating}
                                  duration={element.duration}
                                  image={element.image}
                                  url={element.url}
                              />
                         </div>
                     </div>
                </div>
             </section>
        </div>
    )
};

export default Home;