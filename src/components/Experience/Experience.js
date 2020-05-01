import React from 'react';
import style from './Experience.module.scss';
import PageTitle from '../common/PageTitle';
import Fade from 'react-reveal/Fade';

const Experience = (props) => {
    return (
        <div id={'experience'} className={style.experienceContainer}>
            <PageTitle title={'Опыт'} />
            <Fade clear>
                <div className={style.experience}>
                    <div className={style.education}>
                        <div className={style.title}>Образование</div>
                        <div>09.2001 - 07.2006</div>
                        <div>Самарская ГСХА</div>
                        <div>Инженер</div>
                    </div>
                    <div className={style.job}>
                        <div className={style.title}>Работа</div>
                        <div>02.2017 - по настоящее время</div>
                        <div>ООО "Пеламин"</div>
                        <div>Менеджер <br />(контент-менеджер)</div>
                        <div>SEO</div>
                        <div>• администрирование интернет магазина</div>
                        <div>• наполнение интернет-магазина товаром</div>
                        <div>• разработка новых направлений(сайтов)</div>
                    </div>
                    <div className={style.kursy}>
                        <div className={style.title}>Курсы</div>
                        <div>06.2019 - по настоящее время</div>
                        <div>it-incubator</div>
                        <div>React developer</div>
                          <div> <br/>06.2018 - 07.2018</div>
                          <div>SkillUp Minsk</div>
                          <div>Тестирование ПО</div>
                        <div><br/>07.2017 - 09.2017</div>
                        <div>Seo-kursy</div>
                        <div>HTML, CSS + SEO + Google Ads, Yandex direct</div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Experience;