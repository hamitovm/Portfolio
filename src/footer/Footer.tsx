import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>
                    Ivanov Ivan
                </h3>
                <div className={style.footerElements}>
                    <div className={style.footerElement}></div>
                    <div className={style.footerElement}></div>
                    <div className={style.footerElement}></div>
                    <div className={style.footerElement}></div>
                </div>
                <p>© All rights reserved</p>
            </div>
        </div>
    );
}
