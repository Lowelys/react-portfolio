import React from 'react';
import style from './Info.module.scss';
import photo from './../../assets/img/photo1.png';

const Info = (props) => {
    return (
        <div id={'about'} className={style.infoContainer}>
            <div className={style.greeting}>
                <span>Привет!</span>
                <span><h1>Я <span className={style.name}>Сергей Белов</span>,</h1></span>
                <span>React (redux) developer</span>
            </div>
            <div className={style.photo}>
                <img src={photo} alt='' />
            </div>
        </div>
    );
}

export default Info;